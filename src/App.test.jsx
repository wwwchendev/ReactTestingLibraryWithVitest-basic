/* eslint-disable vitest/no-commented-out-tests */
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { expect } from 'vitest';
import { describe } from 'vitest';
import { kebabCaseToTitleCase } from './helpers';

// 1.單元測試-元件
test('按鈕初始顯示正確標籤和顏色', () => {
  render(<App />);
  const btnEl = screen.getByRole('button', { name: /藍色/i });
  expect(btnEl).toHaveClass(/red/i);
});

// 2.集成測試-單個元件流程
test('按鈕點擊流程', () => {
  // 渲染App + 找到'按鈕'元素
  render(<App />);
  const btnEl = screen.getByRole('button', { name: /藍色/i });
  // 確認初始顏色
  expect(btnEl).toHaveClass(/red/i);
  // 點擊按鈕
  fireEvent.click(btnEl);
  // 確認標籤文本 
  expect(btnEl).toHaveTextContent(/紅色/i);
  // 確認點擊後顏色
  expect(btnEl).toHaveClass(/blue/i); // 測試Class比測試實際css-style更直觀
  // expect(btnEl).toHaveStyle({ backgroundColor: /rgba(0,0,255)/i });
});

// 3.集成測試-多個元件協作流程
test('Checkbox點擊流程', () => {
  // 渲染App + 找到'按鈕'元素
  render(<App />);
  const btnEl = screen.getByRole('button', { name: /藍色/i });
  const checkboxEl = screen.getByRole('checkbox', { name: /禁用按鈕/i });

  // 確認初始化條件
  expect(btnEl).toBeEnabled();
  expect(checkboxEl).not.toBeChecked();
  expect(btnEl).toHaveClass('medium-violet-red');

  // 按鈕禁用
  fireEvent.click(checkboxEl);
  expect(btnEl).toBeDisabled();
  expect(btnEl).toHaveStyle({ backgroundColor: /rgb(153, 153, 153)/i });

  // 解除按鈕禁用
  fireEvent.click(checkboxEl);
  expect(btnEl).toBeEnabled();
  expect(btnEl).toHaveClass('medium-violet-red');

  // 變色
  fireEvent.click(btnEl);
  expect(btnEl).toBeEnabled();
  expect(checkboxEl).not.toBeChecked();
  expect(btnEl).toHaveClass('midnight-blue');

  // 按鈕禁用
  fireEvent.click(checkboxEl);
  expect(btnEl).toBeDisabled();
  expect(btnEl).toHaveStyle({ backgroundColor: /rgb(153, 153, 153)/i });

  // 解除按鈕禁用
  fireEvent.click(checkboxEl);
  expect(btnEl).toBeEnabled();
  expect(btnEl).toHaveClass('midnight-blue');
})


// 4.單元測試-函數
// describe 用於定義一系列與 kebabCaseToTitleCase 函數相關的單元測試。
// 在這個describe中有三個測試案例，每個案例都測試 kebabCaseToTitleCase函數不同輸入情況。
describe('從連字符的命名風格改為格式化標題', () => {
  test('沒有連字符號', () => {
    expect(kebabCaseToTitleCase('red')).toBe('Red');
  });
  test('有1個連字符號', () => {
    expect(kebabCaseToTitleCase('midnight-blue')).toBe('Midnight Blue');
  });
  test('有多個連字符號', () => {
    expect(kebabCaseToTitleCase('medium-violet-red')).toBe('Medium Violet Red');
  });
})