import { Example } from "./Example";

import styles from "./Example.module.css";

const DEFAULT_EXAMPLES: string[] = [
    "What is this lecture all about? Give me the key topics",
    "Explain the key diagrams to me in simple language. Provide page numbers.",
    "What is particularly relevant for the exam?"
];

const GPT4V_EXAMPLES: string[] = [
    "What is this lecture all about? Give me the key topics",
    "Explain the key diagrams to me in simple language. Provide page numbers.",
    "What is particularly relevant for the exam?"
];

interface Props {
    onExampleClicked: (value: string) => void;
    useGPT4V?: boolean;
}

export const ExampleList = ({ onExampleClicked, useGPT4V }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {(useGPT4V ? GPT4V_EXAMPLES : DEFAULT_EXAMPLES).map((question, i) => (
                <li key={i}>
                    <Example text={question} value={question} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
