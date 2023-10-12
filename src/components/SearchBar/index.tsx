import './styles.css';
export default function SearchaBar() {
    return (
        <form className="dsc-search-bar">
            <button type="submit">🔎︎</button>
            <input type="text" placeholder="Nome do produtos" />
            <button type="reset">🗙</button>
        </form>
    );
}