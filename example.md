# Example Document

This is an example Markdown document with Mermaid diagrams.

## Flowchart Example

```mermaid
graph TD
    A[Start] --> B{Is it working?}
    B -->|Yes| C[Great!]
    B -->|No| D[Debug]
    D --> B
    C --> E[End]
```

## Sequence Diagram Example

```mermaid
sequenceDiagram
    participant User
    participant App
    participant API

    User->>App: Request data
    App->>API: Fetch data
    API-->>App: Return data
    App-->>User: Display data
```

## Features

- **Bold text**
- *Italic text*
- `Inline code`

### Code Block

```javascript
function hello() {
    console.log('Hello, World!');
}
```

### Table

| Feature | Status |
|---------|--------|
| Mermaid | ✅ |
| Tables  | ✅ |
| Code    | ✅ |

### Blockquote

> This is a blockquote example.
> It can span multiple lines.

---

That's all folks!
