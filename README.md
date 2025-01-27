# @krozamdev/react-masked-password

A lightweight, customizable masked password input component for Vue3. This component allows you to securely mask password input fields and provides a customizable approach to controlling password visibility.
The InputMaskingPassword component is a password input field that includes masking functionality (hiding characters as the user types) and allows toggling to show or hide the password. It uses the `@krozamdev/masked-password` library to apply the masking and supports custom mask characters. The component also handles password input changes by passing the raw (unmasked) value via a callback function.

<p align="center">
  <a href="https://www.npmjs.com/package/@krozamdev/react-masked-password"><img src="https://img.shields.io/npm/v/@krozamdev/react-masked-password" alt="Latest Version"></a>
  <a href="https://www.npmjs.com/package/@krozamdev/react-masked-password"><img src="https://img.shields.io/npm/dt/@krozamdev/react-masked-password" alt="Total Download"></a>
  <a href="https://www.npmjs.com/package/@krozamdev/react-masked-password"><img src="https://img.shields.io/npm/l/@krozamdev/react-masked-password" alt="License"></a>
</p>

## Compatible Packages

<ul style="list-style: none; padding: 0; text-align: left;">
  <li>
    <a href="https://github.com/krozamdev/masked-password">
      <img src="https://img.shields.io/badge/vanillaJS-%40krozamdev%2Fmasked--password-F7DF1E?logo=javascript" alt="VanillaJS">
    </a>
  </li>
  <li>
    <a href="https://github.com/krozamdev/react-masked-password">
      <img src="https://img.shields.io/badge/React-%40krozamdev%2Freact--masked--password-61DAFB?logo=react" alt="React">
    </a>
  </li>
  <li>
    <a href="https://github.com/krozamdev/vue-masked-password">
      <img src="https://img.shields.io/badge/Vue-%40krozamdev%2Fvue--masked--password-42b883?logo=vuedotjs" alt="Vue">
    </a>
  </li>
  <li>
    <a href="https://github.com/krozamdev/svelte-masked-password">
      <img src="https://img.shields.io/badge/Svelte-%40krozamdev%2Fsvelte--masked--password-FF3E00?logo=svelte" alt="Svelte">
    </a>
  </li>
</ul>

## Features

- **Masked Input**: Mask the entered password with a configurable mask character.
- **Password Toggle**: Option to show or hide the password input.
- **TypeScript Support**: Written in TypeScript for better type safety.
- **Easy Integration**: Can be easily integrated into any React form.
- **Lightweight**: Minimal JavaScript bundle size for better performance.
- **Cross-browser Compatibility**: Works across modern browsers.

## Installation

To install the package, use either npm or yarn:

- npm
    ```bash
    npm install @krozamdev/react-masked-password
    ```
- yarn
    ```bash
    yarn add @krozamdev/react-masked-password
    ```
- pnpm
    ```bash
    pnpm add @krozamdev/react-masked-password
    ```
- bun
    ```bash
    bun add @krozamdev/react-masked-password
    ```

## Usage

Here’s an example of how to use the masked password input component in your React project:

```tsx
import React from 'react';
import InputMaskingPassword from '@krozamdev/react-masked-password';

const MyForm: React.FC = () => {

  const handlePasswordChange = (value: string) => {
    console.log(value);
  };

  return (
    <form>
      <InputMaskingPassword
        onChangeEvent={handlePasswordChange}
        showPassword={false}  // set to true to show the password
        maskCharacter="*"  // customize the mask character, default •
        placeholder="Enter your password"
      />
    </form>
  );
};

export default MyForm;
```

## Props

| Prop             | Type                                    | Description                                                                                      |
|------------------|-----------------------------------------|--------------------------------------------------------------------------------------------------|
| `onChangeEvent`  | `(originalValue: string)`               | Callback that fires when the password value changes.                                              |
| `maskCharacter`  | `string`                                | (Optional) The character used to mask the password. Defaults to `•`.                             |
| `showPassword`   | `boolean`                               | (Optional) Show or hide the password input. Defaults to `false`.                                  |
| `...props`        | `React.InputHTMLAttributes<HTMLInputElement>` | All other standard HTML input attributes are supported, such as `placeholder`, `className`, etc. |



## Development

To build the project locally:

1. Clone the repository:
    ```bash
    git clone https://github.com/krozamdev/react-masked-password.git
    cd react-masked-password
    ```
2. Install dependencies:
    ```bash
    yarn install
    ```
3. Run the build:
    ```bash
    yarn build
    ```
This will create the build output in the dist directory, including both CommonJS and ESM formats.

## Contributing

1. Fork the repository.
2. Create your feature branch (git checkout -b feature/my-feature).
3. Commit your changes (git commit -am 'Add new feature').
4. Push to the branch (git push origin feature/my-feature).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For support, please email [support@krozam.tech](mailto:support@krozam.tech).
