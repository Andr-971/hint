
// ⁡⁢⁣⁢STORYBOOK⁡
// ⁡⁣⁣⁢Storybook — это инструмент для разработки UI-компонентов в изоляции от основного приложения. Он позволяет создавать, тестировать и документировать компоненты независимо от бизнес-логики и контекста приложения.⁡
// ⁡⁢⁣⁣ОСНОВНЫЕ ХАРАКТЕРИСТИКИ⁡
{
	// ⁡⁣⁣⁢- Изолированная разработка - компоненты разрабатываются отдельно от приложения⁡
	// ⁡⁣⁣⁢- Интерактивное тестирование - возможность взаимодействовать с компонентами в реальном времени⁡
	// ⁡⁣⁣⁢- Документирование - автоматическая генерация документации⁡
	// ⁡⁣⁣⁢- Надстройки (addons) - расширения для дополнительной функциональности⁡
	// ⁡⁣⁣⁢- Поддержка различных фреймворков - React, Vue, Angular и другие⁡
}
// ⁡⁢⁣⁣УСТАНОВКА И НАСТРОЙКА⁡
{
	// ⁡⁣⁣⁢Для создания проекта с Storybook⁡
	// ⁡⁣⁢⁢npx storybook init⁡
	// ⁡⁣⁣⁢После установки запустить Storybook можно командой⁡
	// ⁡⁣⁢⁢npm run storybook⁡
}
// ⁡⁢⁣⁣ПРИНЦИП РАБОТЫ⁡
{
	// ⁡⁣⁣⁢Структура файлов⁡
	// .storybook/                  # конфигурационные файлы
	// - main.js                # основная конфигурация
	// - preview.js             # настройки отображения
	// src/
	// - components/
	// -- Button/
	// --- Button.jsx           # сам компонент
	// --- Button.stories.jsx   # stories для компонента
	// --- Button.module.css    # стили
	// ⁡⁣⁣⁢Создание stories⁡
    // ⁡⁣⁢⁢Пример для кнопки (Button.stories.jsx)⁡
    {
        // import React from "react";
		// import Button from "./Button";

		// export default {
		// 	title: "Components/Button",
		// 	component: Button,
		// 	argTypes: {
		// 		backgroundColor: { control: "color" },
		// 		onClick: { action: "clicked" },
		// 	},
        // };
        // const Template = (args) => <Button {...args} />;
		// export const Primary = Template.bind({});
		// Primary.args = {
		// 	primary: true,
		// 	label: "Button",
		// };
		// export const Secondary = Template.bind({});
		// Secondary.args = {
		// 	label: "Button",
		// };
		// export const Large = Template.bind({});
		// Large.args = {
		// 	size: "large",
		// 	label: "Button",
		// };
		// export const Small = Template.bind({});
		// Small.args = {
		// 	size: "small",
		// 	label: "Button",
		// };
    }
}
// ⁡⁢⁣⁣ОСНОВНЫЕ КОНЦЕПЦИИ⁡
{
	// ⁡⁣⁣⁢1. Stories (Истории)⁡
	// ⁡⁢⁢⁢- Каждая story представляет собой состояние компонента. В примере выше мы создали 4 состояния кнопки: Primary, Secondary, Large и Small.⁡
	// ⁡⁣⁣⁢2. Args (Аргументы)⁡
	// ⁡⁢⁢⁢- Args - это входные параметры компонента. Они позволяют динамически изменять пропсы компонента через панель управления Storybook.⁡
	// ⁡⁣⁣⁢3. Controls (Управление)⁡
	// ⁡⁢⁢⁢- Controls предоставляют интерфейс для изменения props компонента в реальном времени без изменения кода.⁡
	// ⁡⁣⁣⁢4. Actions⁡
	// ⁡⁢⁢⁢- Позволяют отслеживать события, генерируемые компонентом (например, клики).⁡
}
// ⁡⁢⁣⁣РАСШИРЕННЫЕ ВОЗМОЖНОСТИ⁡
{
	// ⁡⁣⁣⁢# ДЕКОРАТОРЫ (DECORATORS)⁡
	// ⁡⁢⁢⁢- Декораторы позволяют оборачивать stories в дополнительные компоненты или контекст.⁡
	{
		// import { MemoryRouter } from "react-router-dom";
		// export const decorators = [
		// 	(Story) => (
		// 		<MemoryRouter initialEntries={["/"]}>
		// 			<Story />
		// 		</MemoryRouter>
		// 	),
		// ];
	}
	// ⁡⁣⁣⁢# ПАРАМЕТРЫ (PARAMETERS)⁡
	// ⁡⁢⁢⁢- Глобальные настройки для stories⁡
	{
		// export default {
		// 	title: "Components/Button",
		// 	component: Button,
		// 	parameters: {
		// 		backgrounds: {
		// 			values: [
		// 				{ name: "red", value: "#f00" },
		// 				{ name: "green", value: "#0f0" },
		// 			],
		// 		},
		// 	},
		// };
	}
	// ⁡⁣⁣⁢# ПОПУЛЯРНЫЕ АДДОНЫ(Надстройки)⁡
	// ⁡⁢⁢⁢- Controls - интерактивное управление props⁡
	// ⁡⁢⁢⁢- Actions - отслеживание событий⁡
	// ⁡⁢⁢⁢- Viewport - тестирование на разных размерах экрана⁡
	// ⁡⁢⁢⁢- Accessibility - проверка доступности⁡
	// ⁡⁢⁢⁢- Storysource - просмотр исходного кода stories⁡
	// ⁡⁢⁢⁢- Docs - автоматическая генерация документации⁡
    // ⁡⁣⁣⁢Пример подключения аддонов в .storybook/main.js⁡
    {
        module.exports = {
			stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
			addons: [
				"@storybook/addon-links",
				"@storybook/addon-essentials",
				"@storybook/addon-interactions",
				"@storybook/preset-create-react-app",
			],
			framework: "@storybook/react",
		};
    }
}
// ⁡⁢⁣⁣ДОКУМЕНТИРОВАНИЕ КОМПОНЕНТОВ⁡
{
	// ⁡⁣⁣⁢Storybook позволяет создавать rich-документацию с использованием MDX⁡
    // ⁡⁣⁣⁢file.mdx⁡
    {
        // import { Meta, Story, Canvas } from '@storybook/addon-docs';
        // import Button from './Button';
        // <Meta title="Components/Button" component={Button} />
        // # Button Component
        // General purpose button for all your clicking needs.
        // ## Props
        // | Prop    | Type     | Default | Description       |
        // |---------|----------|---------|-------------------|
        // | label   | string   | ''      | Button text       |
        // | primary | boolean  | false   | Primary style     |
        // | size    | string   | 'medium'| Size of the button|
        // <Canvas>
        // <Story name="Primary" args={{ primary: true, label: 'Primary Button' }} />
        // </Canvas>
    }
}
// ⁡⁢⁣⁣ТЕСТИРОВАНИЕ В STORYBOOK⁡
{
	// ⁡⁣⁣⁢1. Визуальное тестирование⁡
	// ⁡⁢⁢⁢- Storybook можно интегрировать с инструментами визуального тестирования, такими как Chromatic или Percy.⁡
	// ⁡⁣⁣⁢2. Интерактивное тестирование⁡
    // ⁡⁢⁢⁢- Используя аддон @storybook/addon-interactions⁡
    {
        // jsx;
		// import { userEvent, within } from "@storybook/testing-library";
		// export const FilledForm = Template.bind({});
		// FilledForm.play = async ({ canvasElement }) => {
		// 	const canvas = within(canvasElement);
		// 	await userEvent.type(canvas.getByTestId("email"), "email@provider.com");
		// 	await userEvent.type(canvas.getByTestId("password"), "a-random-password");
		// 	await userEvent.click(canvas.getByRole("button"));
		// };
    }
}
// ⁡⁢⁣⁣ИНТЕГРАЦИЯ С ДРУГИМИ ИНСТРУМЕНТАМИ⁡
{
    // ⁡⁣⁣⁢- Темизация - можно настроить разные темы для компонентов⁡
    // ⁡⁣⁣⁢- i18n - тестирование локализации⁡
    // ⁡⁣⁣⁢- Redux/MobX - интеграция с state-менеджерами⁡
    // ⁡⁣⁣⁢- GraphQL - mock-запросов с помощью MSW⁡
}
// ⁡⁢⁣⁣ПРИМЕР КОМПЛЕКСНОГО КОМПОНЕНТА⁡
{
    // ⁡⁣⁣⁢Рассмотрим пример более сложного компонента - модального окна⁡
    {
        // Modal.jsx:
        // jsx
        // import React, { useState } from 'react';
        // import styles from './Modal.module.css';
        const Modal = ({ title, children, onClose, isOpen }) => {
        if (!isOpen) return null;
        return (
            <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.header}>
                <h3>{title}</h3>
                <button onClick={onClose} className={styles.closeButton}>
                    &times;
                </button>
                </div>
                <div className={styles.content}>{children}</div>
            </div>
            </div>
        );
        };

        // export default Modal;
        // Modal.stories.jsx:

        jsx
        // import React from 'react';
        // import Modal from './Modal';

        // export default {
        //     title: 'Components/Modal',
        //     component: Modal,
        //     argTypes: {
        //         onClose: { action: 'closed' },
        //         isOpen: { control: 'boolean', defaultValue: true },
        //         title: { control: 'text', defaultValue: 'Modal Title' },
        //     },
        // };

        const Template = (args) => (
        <Modal {...args}>
            <p>This is the modal content. You can put anything here.</p>
        </Modal>
        );
        // export const Default = Template.bind({});
        Default.args = {
        isOpen: true,
        title: 'Default Modal',
        };
        // export const WithLongContent = Template.bind({});
        WithLongContent.args = {
        isOpen: true,
        title: 'Modal with Scroll',
        children: (
            <div>
            <p>Long content that will cause scrolling...</p>
            {Array.from({ length: 20 }).map((_, i) => (
                <p key={i}>Line {i + 1}</p>
            ))}
            </div>
        ),
        };
    }
}