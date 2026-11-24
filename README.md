# React UI Toolkit

A small, accessible, and reusable React component toolkit built with TypeScript.

> Early-stage starter project. Components and examples will evolve as the toolkit grows.

## Features
- Reusable Button, Card, and TextField components
- TypeScript component props
- Accessible labels and native HTML semantics
- Lightweight CSS with no component-library dependency
- Vite-powered development workflow

## Getting started
```bash
npm install
npm run dev
```

## Available scripts
- `npm run dev` — start the development server
- `npm run build` — type-check and build for production
- `npm run preview` — preview the production build

## Example
```tsx
import { Button, Card, TextField } from "./components";

function Example() {
  return (
    <Card>
      <TextField label="Your name" placeholder="Enter your name" />
      <Button onClick={() => alert("Hello!")}>Say hello</Button>
    </Card>
  );
}
```

## Contributing
Bug reports, accessibility improvements, documentation updates, and component ideas are welcome. Open an issue before starting a large change.

## License
MIT — see [LICENSE](./LICENSE).
