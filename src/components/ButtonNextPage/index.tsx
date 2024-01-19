import './styles.css';

type Props = {
    text: string;
    // eslint-disable-next-line @typescript-eslint/ban-types
    onNextPage: Function;
}
export default function ButtonNextPage({ text, onNextPage }: Props) {
    return (
        <div onClick={() => onNextPage()} className="dsc-btn-next-page">{text}</div>
    );
}
