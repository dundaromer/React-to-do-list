import React, { useState } from 'react'

function List() {
    const [list, setList] = useState('');
    const [listDic, setListDic] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const handleChange = () => {
        if (list.trim() !== ''){
            const newItem = [...listDic, list]
            setListDic(newItem)
            setList('')
        }
    }
    const handleUpdate = (index) => {
        setEditIndex(index);
    };

    const handleDelete = (index) => {
        const newList = listDic.filter((_, i) => i !== index); 
        setListDic(newList); 
    }
    const handleEditChange = (e, index) => { // Eklenen: Düzenleme sırasında metin girişinin değerini güncelleme işlevi
        const newList = [...listDic];
        newList[index] = e.target.value;
        setListDic(newList);
    };
  return (
    <div className='listComp'>
      <br/>
      <input className='listCompinput'  value={list} onChange={(e) => setList(e.target.value)} placeholder='Görev Ekle'/>
      <button className='btn' onClick={handleChange} >Ekle</button>
      <br/>
      <br/>
        <ul>
                {listDic.map((item, index) => (
                    <li className='list' key={index}>
                             {editIndex === index ? (
                            <input
                            className='updateInput'
                                value={item}
                                onChange={(e) => handleEditChange(e, index)}
                                onBlur={() => setEditIndex(null)}
                            />
                        ) : (
                            "- " + item
                        )}
                            <div>
                                <button className='updateBtn' onClick={() =>handleUpdate(index)}><i className="fa-solid fa-pen"></i></button>
                                <button className='delBtn' onClick={() => handleDelete(index)}><i className="fa-solid fa-trash"></i></button>
                            </div>

                    </li>
                ))}
        </ul>

    </div>
        
  )
}

export default List
