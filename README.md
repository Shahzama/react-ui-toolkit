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
pnpm install
pnpm run dev
```

The development server will print the local address in the terminal.

## Available scripts
- `pnpm run dev` — start the development server
- `pnpm run typecheck` — check TypeScript without creating build files
- `pnpm run build` — type-check and build for production
- `pnpm test` — run the component test suite once
- `pnpm run test:watch` — run component tests in watch mode
- `pnpm run preview` — preview the production build

## Tests

The component tests use Vitest and React Testing Library. They cover Button defaults and variants, Card structure, and TextField labels, hints, and error states.

Run the full local check before opening a pull request:

```bash
pnpm run typecheck
pnpm run build
pnpm test
```

## Continuous integration

GitHub Actions runs the same type-check, production build, and test suite on pushes and pull requests targeting `main`. The workflow is in [`.github/workflows/ci.yml`](.github/workflows/ci.yml).

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
