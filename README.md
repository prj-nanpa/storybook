# React 環境

[参考サイト](https://zenn.dev/youichiro/articles/d625e602ed47c1)の preview で追記するだけでインストールできる

## 参考資料

[react-icon](https://react-icons.github.io/react-icons)
[Figma](https://www.figma.com/file/TDAjPlvQ9JtDsheXRczr42/App?node-id=0%3A1)
[import を絶対パスにするために](https://zenn.dev/nbr41to/articles/84f4a7a7c1c165af2ef7)

## Tailwind CSS Rule

- Storybook では[Concentirc CSS](https://rhodesmill.org/brandon/2011/concentric-css/)に合わせて、一行ずつ分割する
- React 上ではなるべく@apply で定義する

```css
 {
  display: ;
  position: ;
  float: ;
  clear: ;

  visibility: ;
  opacity: ;
  z-index: ;

  margin: ;
  outline: ;
  border: ;
  background: ;
  padding: ;

  width: ;
  height: ;
  overflow: ;

  color: ;
  text: ;
  font: ;
}
```

- color text font に関しては@apply にて Figma のテキストスタイルに合わせて定義しておく
- 動的にスタイルを変更する場合は@apply で定義して動的に分割する
- @apply で入力する際は、ハイフン区切りで適応先を明記する
