import React, { useEffect, useState } from 'react';
import Navbar from '../component/Navbar';
import axios from 'axios';

const Create = () => {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [est, setEst] = useState('');
    const [cat, setCat] = useState('');
    const [category, setCategory] = useState([]);
    const [ingredientList, setIngredientList] = useState([{ ingredient: "" }]);
    const [stepList, setStepList] = useState([{ step: "" }]);

    const handleIngredientChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...ingredientList];
        list[index][name] = value;
        setIngredientList(list);
    };

    const handleIngredientRemove = (index) => {
        const list = [...ingredientList];
        list.splice(index, 1);
        setIngredientList(list);
    };

    const handleIngredientAdd = () => {
        setIngredientList([...ingredientList, { ingredient: "" }]);
    };

    const handleStepChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...stepList];
        list[index][name] = value;
        setStepList(list);
    };

    const handleStepRemove = (index) => {
        const list = [...stepList];
        list.splice(index, 1);
        setStepList(list);
    };

    const handleStepAdd = () => {
        setStepList([...stepList, { step: "" }]);
    };

    useEffect(() => {
        const apiUrl = process.env.REACT_APP_API_URL + '/category';
        const token = localStorage.getItem('token-recepie');
        axios.get(apiUrl, {
            headers: {
                'X-ACCESS-TOKEN': token
            }
        })
        .then(res => {
            setCategory(res.data.data)
        })
    })

    const handleSubmit = () => {
        const id = localStorage.getItem('id-contributor');
        const token = localStorage.getItem('token-recepie');
        const apiUrl = process.env.REACT_APP_API_URL + '/recipe/create'
        const body = {
            name: name,
            description: desc,
            category_id: cat,
            contributor_id: id,
            ingredient: ingredientList,
            steps: stepList,
            estimation: est 
        }
        axios.post(apiUrl, body, {
            headers: {
                'X-ACCESS-TOKEN': token
            }
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err.response.data)
        })
    }

    return (
        <>
            <Navbar />
            <div className='pt-20 pl-5 pr-5 pb-5'>
                <div className='bg-white rounded-xl ml-5 mr-5 p-5'>
                    <h1 className='text-center text-2xl font-bold text-[#FFA113] mb-3'>Create Recepie</h1>
                    <form>
                        <div className='flex w-full flex-wrap md:flex-nowrap'>
                            <div className='w-[50%] mr-5'>
                                <div className=''>
                                    <label className=''>Name Recepie</label><br></br>
                                    <input type="text" className='w-full py-2 border-[#e2ddd9] border-b-2 focus:border-[#FFA113] text-gray-600 outline-none' placeholder='Enter Name Recepie' value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className='mt-3'>
                                    <label className=''>Description</label><br></br>
                                    <textarea type="text" className='w-full py-2 border-[#e2ddd9] border-b-2 focus:border-[#FFA113] text-gray-600 outline-none' placeholder='Enter Descriptions' value={desc} onChange={(e) => setDesc(e.target.value)} />
                                </div>
                                <div className='mt-3'>
                                    <label className=''>Categories</label><br></br>
                                    <select className='w-full py-2 border-[#e2ddd9] border-b-2 focus:border-[#FFA113] text-gray-600 outline-none' placeholder='Enter Categories' onChange={(e) => setCat(e.target.value)} >
                                        <option value="" disabled selected>Select Category</option>
                                        {category.map(item => (
                                            <option value={item.id}>{item.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className='mt-3'>
                                    <label className=''>Estimate</label><br></br>
                                    <input type="number" className='w-full py-2 border-[#e2ddd9] border-b-2 focus:border-[#FFA113] text-gray-600 outline-none' placeholder='Enter Estimate in minutes' value={est} onChange={(e) => setEst(e.target.value)} />
                                </div>
                            </div>
                            <div className='w-[50%]'>
                                <div className=''>
                                    <label className=''>Ingredients</label><br></br>
                                    {ingredientList.map((singleIngredient, index) => (
                                        <div key={index} className="services">
                                            <div className="first-division">
                                            <input type="text" name="ingredient" className='w-[80%] mr-3 py-2 border-[#e2ddd9] border-b-2 focus:border-[#FFA113] text-gray-600 outline-none' value={singleIngredient.ingredient} placeholder='Enter Ingredient' onChange={(e) => handleIngredientChange(e, index)}/>
                                            {ingredientList.length - 1 === index && ingredientList.length < 4 && (
                                                <button
                                                type="button"
                                                onClick={handleIngredientAdd}
                                                className="bg-[#FFA113] rounded-lg px-5 py-3 text-white"
                                                >
                                                <span>Add Ingredient</span>
                                                </button>
                                            )}
                                            </div>
                                            <div className="second-division">
                                            {ingredientList.length !== 1 && (
                                                <button
                                                type="button"
                                                onClick={() => handleIngredientRemove(index)}
                                                className="bg-red-600 rounded-lg px-5 py-3 text-white mt-3"
                                                >
                                                <span>Remove</span>
                                                </button>
                                            )}
                                            </div>
                                        </div>
                                        ))}
                                </div>
                                <div className='mt-5'>
                                    <label className=''>Step Cooking</label><br></br>
                                    {stepList.map((singleStep, index) => (
                                        <div key={index} className="services">
                                            <div className="first-division">
                                            <input type="text" name="step" className='w-[80%] mr-3 py-2 border-[#e2ddd9] border-b-2 focus:border-[#FFA113] text-gray-600 outline-none' placeholder='Enter Ingredient' value={singleStep.step} onChange={(e) => handleStepChange(e, index)}/>
                                            {stepList.length - 1 === index && stepList.length < 4 && (
                                                <button
                                                type="button"
                                                onClick={handleStepAdd}
                                                className="bg-[#FFA113] rounded-lg px-5 py-3 text-white"
                                                >
                                                <span>Add step</span>
                                                </button>
                                            )}
                                            </div>
                                            <div className="second-division">
                                            {stepList.length !== 1 && (
                                                <button
                                                type="button"
                                                onClick={() => handleStepRemove(index)}
                                                className="bg-red-600 rounded-lg px-5 py-3 text-white mt-3"
                                                >
                                                <span>Remove</span>
                                                </button>
                                            )}
                                            </div>
                                        </div>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className='mt-3'>
                        <button className='bg-[#FFA113] px-5 py-2 text-white rounded-lg' onClick={() => handleSubmit()}>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Create;