# @krozamdev/react-masked-password

A lightweight, customizable masked password input component for React. This component allows you to securely mask password input fields and provides a customizable approach to controlling password visibility.

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