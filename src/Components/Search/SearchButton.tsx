import Button from "../common/Button/Button"

export default function SearchButton(){
    function handleClick(){
        alert('I was clicked')
    }

    return(
        <Button buttonTitle="Search" onClick={handleClick}/>
    )
}
