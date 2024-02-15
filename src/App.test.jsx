/* eslint-disable vitest/no-commented-out-tests */
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { expect } from 'vitest';

// test('按鈕初始顯示正確標籤和顏色', () => {
//   render(<App />);
//   const btnEl = screen.getByRole('button', { name: /藍色/i });
//   expect(btnEl).toHaveClass('red');
// });

// test('按鈕點擊流程', () => {
//   // 渲染App + 找到'按鈕'元素
//   render(<App />);
//   const btnEl = screen.getByRole('button', { name: /藍色/i });
//   // 確認初始顏色
//   expect(btnEl).toHaveClass('red');
//   // 點擊按鈕
//   fireEvent.click(btnEl);
//   // 確認標籤文本 
//   expect(btnEl).toHaveTextContent(/紅色/i);
//   // 確認點擊後顏色
//   expect(btnEl).toHaveClass('blue'); // 測試Class比測試實際css-style更直觀
//   // expect(btnEl).toHaveStyle({ backgroundColor: /rgba(0,0,255)/i });
// });

test('Checkbox點擊流程', () => {
  // 渲染App + 找到'按鈕'元素
  render(<App />);
  const btnEl = screen.getByRole('button', { name: /藍色/i });
  const checkboxEl = screen.getByRole('checkbox', { name: /禁用按鈕/i });

  // 確認初始化條件
  expect(btnEl).toBeEnabled();
  expect(checkboxEl).not.toBeChecked();
  expect(btnEl).toHaveStyle({ backgroundColor: /rgb(255, 0, 0)/i });

  // 按鈕禁用
  fireEvent.click(checkboxEl);
  expect(btnEl).toBeDisabled();
  expect(btnEl).toHaveStyle({ backgroundColor: /rgb(153, 153, 153)/i });

  // 解除按鈕禁用
  fireEvent.click(checkboxEl);
  expect(btnEl).toBeEnabled();
  expect(btnEl).toHaveStyle({ backgroundColor: /rgb(255, 0, 0)/i });

  // 變色
  fireEvent.click(btnEl);
  expect(btnEl).toBeEnabled();
  expect(checkboxEl).not.toBeChecked();
  expect(btnEl).toHaveStyle({ backgroundColor: /rgb(0, 0, 255)/i });

  // 按鈕禁用
  fireEvent.click(checkboxEl);
  expect(btnEl).toBeDisabled();
  expect(btnEl).toHaveStyle({ backgroundColor: /rgb(153, 153, 153)/i });

  // 解除按鈕禁用
  fireEvent.click(checkboxEl);
  expect(btnEl).toBeEnabled();
  expect(btnEl).toHaveStyle({ backgroundColor: /rgb(0, 0, 255)/i });
})