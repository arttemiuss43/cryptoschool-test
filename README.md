# Video Academy

## Installation

### 1. Install dependencies
```bash
composer install
npm install
```
### 2. Create `.env` file
```bash
cp .env.example .env
php artisan key:generate
```
### 3. Set up the database
After creating and setting up the database configuration, run:
```bash
php artisan migrate --seed
```
### 4. Generate Ziggy routes
```bash
php artisan ziggy:generate resources/js/ziggy.js
```
### 5. Generate Ziggy routes
```bash
php artisan ziggy:generate resources/js/ziggy.js
```
`resources/js/ziggy.js` is excluded from version control.
Each developer should generate it locally.
### 6. Start the application
Run the Web server. Compile the Frontend by running:
```bash
npm run dev
```
Important: When using the built-in PHP development server (`php artisan serve`), videos will be limited to several seconds due to lack of support for HTTP Range headers, which are required for proper video streaming.

To avoid this issue: serve your app through a proper web server like Nginx.
### 7. Run Storybook (Optional)
```bash
npm run storybook
```

## Notes on implementation considerations
To keep the test project simple and self-contained, video files and thumbnails are served statically from the local `public/` directory.

In a real-world production environment, media assets would be managed and delivered differently — based on common patterns used in commercial-grade applications:

- **Video files and thumbnails** would be stored in a cloud object storage solution such as **Amazon S3**, **Google Cloud Storage**, or **DigitalOcean Spaces**
- Assets would be served through a global **CDN** such as **Amazon CloudFront**, **Cloudflare CDN**, or **Fastly** to ensure low latency and high availability
- Thumbnails could be generated dynamically during upload

## Notes on Testing
In real-world projects, I always include automated testing as part of my workflow, covering backend logic, frontend components, and API behavior.

While tests were intentionally omitted here due to time constraints, I normally write:
- Unit and feature tests for Laravel applications (PHPUnit, Pest)
- Component and interaction tests for Vue interfaces (Vitest)

Testing is part of how I build reliable and maintainable codebases, and it's something I always apply in production work.

### [Conversion Optimization Details](./ab-test.md)
