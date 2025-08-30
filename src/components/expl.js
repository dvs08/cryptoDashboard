import React, {useState} from 'react';

function App(){

    const[items, setItems] = useState([]);
    const[intputVal, setInputVal] = useState([' ']);
    const [editInd, setEditIndx] = useState(null);

    //use effcet from storage

    // useEffect(() => {
    //     const storedItem = JSON.parse(localStorage.getItem('items')) || [];
    //     setItems(storedItem);
    // },[]);

    //on change

    // useEffect(() => {
    //     localStorage.setItem('items', JSON.stringify(items));
    // },[items]);

    const handleInputChange = (event) => {
        setInputVal(event.target.value);
    };

    //add/edit

    const handleSubmit = (event) => {

        //prevent any deleagtion
        event.preventDefault();
        if(editInd !== null){
            const updatedItems = {...items};
            updatedItems[editInd] = inputVal;
            setItems(updatedItems);
            setEditIndx(null);
        } else {

            setItems([...items, InputVal]);
        }
        setInputVal(' ');
    };

    //edit

    const handleEdit = (index) => {
        setInputVal(items[index]);
        setEditIndx(index);
    };

    //delete Item

    const handleDelete = (index) => {

        const updatedItems = items.filter((_, i) => i != index);  //filterng the array based on i
        setItems(updatedItems);
        };

    //main return

    return (

        <div>
                <h1>Item List</h1>
                <form onsubmit={handleSubmit}>
                    <input
                        type="text"
                        value={intputVal}
                        onchange={handleInputChange}
                        />
                    <button
                        type="submit"
                        >
                        {editInd !== null ? 'update': 'add'}
                    </button>
                </form>
            <ul>
                {items.map((item,index) => (
                    <li key={index}>
                        {item}{' '}
                        <button onclick={() => handleEdit(index)}>Edit</button>
                        <button onclick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
