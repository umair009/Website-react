import React, { useState } from 'react'
import axios from "axios"
//this is my test msg b
//new line
export default function About1(props) {
    const [products, setProducts] = useState([])
    const callme = async () => {
        /*using Javascript fetch method & fetch API. this will retun array of objects, then convert this data using 
        JSON in simple array, then loop this array and show data on frontend. we use async, fetch & await when getting 
        data from API, thrpugh JS fetch method we add await in every line*/
        // let res=await fetch("https://fakestoreapi.com/products")
        // let data=await res.json();
        // console.log("hlo",data)

        /*Here we import axios library through "npm install library_name(axios)".then pass get request to get data from 
        API. This library show us data in array, then loop this array and show data on frontend. */
        let res = await axios.get("https://fakestoreapi.com/products"); //
        let data = res.data
        setProducts(data)
    }

    const [categoryStyle, setCategoryStyle] = useState({
        fontWeight: "bold",
        backgroundColor: "cyan",
        marginBottom: "0px",
        display: "inline-block",
        fontSize: "11px",
        padding: "5px",
        borderRadius: "10px"
    })
    const [imgStyle, setImgStyle] = useState({
        height: "400px"
    })
    return (
        <>
            <div className="container">
                <div className='row'>
                    {products.map((item, index) => (
                        <div className='col-md-4 my-3' key={index}>
                            <div className="card" style={{ width: "18rem" }}>
                                <img style={imgStyle} className="card-img-top" src={item.image} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p style={categoryStyle}>{`Category: ${item.category}`}</p>
                                    <p style={{ fontWeight: "bold" }}>{`Price: ${item.price}`}</p>
                                    <p className="card-text">{item.description}</p>
                                    <p style={{ fontWeight: "bold" }}>{`Rating: ${item.rating.rate}`}</p>
                                </div>
                            </div>
                        </div>
                    )
                    )}
                </div>
                <button onClick={callme}>Clcik Me</button>
                <h1 className="my-3" style={props.headingColor}>About Us</h1>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={props.myStyleBtn} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <strong> Analyze Your text</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={props.myStyleBody}>
                                This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the accordion-body, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={props.myStyleBtn} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <strong>Free to use</strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={props.myStyleBody}>
                                This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the accordion-body, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={props.myStyleBtn} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <strong> Browser Compatible</strong>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={props.myStyleBody}>
                                This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the accordion-body, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
