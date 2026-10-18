type DynamicObject = { [key: string as `dynamic_${string}`]: string };

// Usage:
let obj: DynamicObject = { dynamic_key: "value" };