FROM php:8.3-apache

RUN apt-get update && apt-get install -y \
    git curl zip unzip libpq-dev libzip-dev libicu-dev libonig-dev \
    nodejs npm \
    && docker-php-ext-install pdo pdo_pgsql pgsql intl zip bcmath

# Enable Apache rewrite
RUN a2enmod rewrite

# Set document root to Laravel public/
ENV APACHE_DOCUMENT_ROOT=/var/www/html/public
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf \
    && sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

# Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

COPY . .

RUN composer install --no-dev --optimize-autoloader
RUN npm ci
RUN npm run build

RUN cp .env.example .env || true
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache || true

EXPOSE 80

CMD bash -lc "\
  php artisan config:clear && \
  php artisan route:clear && \
  php artisan view:clear && \
  php artisan migrate --force && \
  apache2-foreground"