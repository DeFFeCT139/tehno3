
function ButtonW({ text}) {
    const goSite = () => window.location.href = 'https://forms.gle/1pVN8FJj9aq7NbGs8';
    return (
        <span onClick={goSite} className="btn-box">
            <button className="btn btn-text">{text}</button>
            <button className="btn btn-text-podlo">{text}</button>
        </span>
    );
  }
  
  export default ButtonW;