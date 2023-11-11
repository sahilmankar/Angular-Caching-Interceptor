
# Angular Caching with HTTP Interceptor
1. [**Introduction**](Introduction)
2. [**Installation**](Installation)
3. [**Implementation Details**](ImplementationDetails)

## Introduction

This repository demonstrates how to implement caching in an Angular15 application using an HTTP Interceptor. The caching mechanism is designed to cache GET requests and improve performance by serving cached responses when available.

## Installation

Follow these steps to set up and run the project locally:

 1. Clone the repository:

 ```bash
   git clone https://github.com/sahilmankar/Angular-Caching-Interceptor.git
 ```

2. Navigate to the project directory:

```bash
cd Angular-Caching-Interceptor 
```

3. Install dependencies:

```bash
npm install
```

4. Run the application:

```bash
ng serve
```

Open your browser and navigate to http://localhost:4200/ to view the application.

## Implementation Details

### HTTP Interceptor
The core of the caching mechanism lies in the Caching Interceptor provided in the src/app/cache.interceptor.ts file. This interceptor checks if a request is a GET request, and if so, it looks for a cached response. If a cached response is available and not expired, it is returned. Otherwise, the request is sent to the server, and the response is cached for future use.

### Caching Strategy
The caching strategy is simple:

Cache is based on the request URL.
Each cached entry includes the response and an expiration date.
```bash
private _cache: Map<string, { expireDate: Date; response: HttpResponse<any> }> = new Map();
```
### Cache Expiry Time
The cache expiry time is set to 10 seconds by default. You can customize this value based on your specific requirements.
```bash
 private cacheExpireTime = 10000;
 expireDate: new Date(Date.now() + this.cacheExpireTime)  
```

### Automatic Cleanup

The interceptor includes an automatic cleanup mechanism:

- **Interval:** Every two minutes, the interceptor automatically cleans up expired entries from the cache.

```bash
setInterval(() => this.cleanupExpiredEntries(), 120000);
```


