import { useState } from 'react';
import './styles.css';

type Props = {
    // eslint-disable-next-line @typescript-eslint/ban-types
    onSearch: Function;
}

export default function SearchaBar({ onSearch } : Props) {

    const [text, setText] = useState("");

    function handleChange(event: React.ChangeEvent<HTMLInputElement>){
        setText(event.target.value);
    }

    function handleSubmit(event: React.FormEvent){
        event.preventDefault();
        onSearch(text);
    }
    function handleResetClick(){
        setText("");
        onSearch(text);
    }

    return (
        <form className="dsc-search-bar" onSubmit={handleSubmit}>
            <button type="submit">🔎︎</button>
            <input value={text} type="text" placeholder="Nome do produtos" onChange={handleChange} />
            <button onClick={handleResetClick}>🗙</button>
        </form>
    );
}