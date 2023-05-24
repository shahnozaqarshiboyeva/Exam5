import React, { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import Map from './Images/Screen Shot 2018-07-18 at 3.20.24 AM.png'
import axios from "axios";
function AddProduct () {
  const [product, setProduct] = useState();
  const handleClick = () => {
    console.log(product.id)
  }
    useEffect(() => {
      axios
        .post("https://fakestoreapi.com/products")
        .then((json) => setProduct(json.data));
    }, []);
  return (
    <>
      <Header />
      <div className="product-divv">
     <input style={{height: '36px', width: '230px', marginTop: '20px', borderRadius: '10px', border: 'none',fontSize: '18px', marginLeft: '20px', paddingLeft: '20px'}} type="text" placeholder="Цена"/>
     <select style={{width: '100px',height: '36px', marginLeft: '40px',borderRadius: '10px', border: 'none',fontSize: '18px', marginLeft: '20px', paddingLeft: '20px'}}>
        <option  value="">Сум</option>
        <option  value="">RUB</option>
      </select>
      <input type="checkbox" style={{width: '70px', height: '23px', marginTop: '26px', position: 'absolute'}}/> 
      <span style={{marginLeft: '53px', fontWeight: '700'}}>Договорная</span>
      <br />
      <input style={{height: '36px', width: '230px', marginTop: '20px', borderRadius: '10px', border: 'none',fontSize: '18px', marginLeft: '20px', paddingLeft: '20px'}} type="text" placeholder="Цена"/>
      <input style={{height: '36px', width: '200px', marginTop: '20px', borderRadius: '10px', border: 'none',fontSize: '18px', marginLeft: '20px', paddingLeft: '20px'}} type="text" placeholder="Цена"/>
      <input style={{height: '36px', width: '200px', marginTop: '20px', borderRadius: '10px', border: 'none',fontSize: '18px', marginLeft: '20px', paddingLeft: '20px'}} type="text" placeholder="Цена"/>
      <div style={{width: '240px', height: '200px', position: 'absolute', marginLeft: '280px'}}>
      <input type="checkbox" style={{width: '70px', height: '23px', marginTop: '26px'}}/> 
      <span>В городе</span>
      <br />
      <input type="checkbox" style={{width: '70px', height: '23px', marginTop: '26px'}}/> 
      <span>В пригороде</span>
      <br />
      <input type="checkbox" style={{width: '70px', height: '23px', marginTop: '26px'}}/> 
      <span>В сельской местности</span>
      </div>
      <div style={{width: '240px', height: '200px', marginLeft: '30px'}}>
      <input type="checkbox" style={{width: '70px', height: '23px', marginTop: '26px'}}/> 
      <span>Вдоль трассы</span>
      <br />
      <input type="checkbox" style={{width: '70px', height: '23px', marginTop: '26px'}}/> 
      <span>Возле водоема, реки</span>
      <br />
      <input type="checkbox" style={{width: '70px', height: '23px', marginTop: '26px'}}/> 
      <span>В предгорьях</span>
      </div>
      <div style={{width: '270px', height: '200px', marginLeft: '30px', position: 'absolute',marginLeft: '536px',marginTop: '-200px'}}>
      <input type="checkbox" style={{width: '70px', height: '23px', marginTop: '26px'}}/> 
      <span>В дачном массиве</span>
      <br />
      <input type="checkbox" style={{width: '70px', height: '23px', marginTop: '26px'}}/> 
      <span>На закрытой территории</span>
      </div>
      <input style={{height: '36px', width: '230px', marginTop: '20px', borderRadius: '10px', border: 'none',fontSize: '18px', marginLeft: '20px', paddingLeft: '20px'}} type="text" placeholder="Цена"/>
      <input style={{height: '36px', width: '200px', marginTop: '20px', borderRadius: '10px', border: 'none',fontSize: '18px', marginLeft: '20px', paddingLeft: '20px'}} type="text" placeholder="Цена"/>
      <input style={{height: '36px', width: '200px', marginTop: '20px', borderRadius: '10px', border: 'none',fontSize: '18px', marginLeft: '20px', paddingLeft: '20px'}} type="text" placeholder="Цена"/>
      <div style={{width: '240px', height: '200px', position: 'absolute', marginLeft: '280px'}}>
      <input type="checkbox" style={{width: '70px', height: '23px', marginTop: '26px'}}/> 
      <span>В городе</span>
      <br />
      <input type="checkbox" style={{width: '70px', height: '23px', marginTop: '26px'}}/> 
      <span>В пригороде</span>
      <br />
      <input type="checkbox" style={{width: '70px', height: '23px', marginTop: '26px'}}/> 
      <span>В сельской местности</span>
      </div>
      <div style={{width: '240px', height: '200px', marginLeft: '30px'}}>
      <input type="checkbox" style={{width: '70px', height: '23px', marginTop: '26px'}}/> 
      <span>Вдоль трассы</span>
      <br />
      <input type="checkbox" style={{width: '70px', height: '23px', marginTop: '26px'}}/> 
      <span>Возле водоема, реки</span>
      <br />
      <input type="checkbox" style={{width: '70px', height: '23px', marginTop: '26px'}}/> 
      <span>В предгорьях</span>
      </div>
      <div style={{width: '270px', height: '200px', marginLeft: '30px', position: 'absolute',marginLeft: '536px',marginTop: '-200px'}}>
      <input type="checkbox" style={{width: '70px', height: '23px', marginTop: '26px'}}/> 
      <span>В дачном массиве</span>
      <br />
      <input type="checkbox" style={{width: '70px', height: '23px', marginTop: '26px'}}/> 
      <span>На закрытой территории</span>
      </div>
      <select style={{width: '200px',height: '36px', marginLeft: '40px',borderRadius: '10px', border: 'none',fontSize: '18px', marginLeft: '20px', paddingLeft: '20px'}}>
        <option  value="">Тип дома</option>
        <option  value="">RUB</option>
      </select>
      <select style={{width: '200px',height: '36px', marginLeft: '40px',borderRadius: '10px', border: 'none',fontSize: '18px', marginLeft: '20px', paddingLeft: '20px'}}>
        <option  value="">Электричество</option>
        <option  value="">RUB</option>
      </select>
      <div style={{width: '240px', height: '200px', position: 'absolute', marginLeft: '280px'}}>
      <input type="checkbox" style={{width: '70px', height: '23px', marginTop: '26px'}}/> 
      <span>В городе</span>
      <br />
      <input type="checkbox" style={{width: '70px', height: '23px', marginTop: '26px'}}/> 
      <span>В пригороде</span>
      <br />
      <input type="checkbox" style={{width: '70px', height: '23px', marginTop: '26px'}}/> 
      <span>В сельской местности</span>
      </div>
      <div style={{width: '240px', height: '200px', marginLeft: '30px'}}>
      <input type="checkbox" style={{width: '70px', height: '23px', marginTop: '26px'}}/> 
      <span>Вдоль трассы</span>
      <br />
      <input type="checkbox" style={{width: '70px', height: '23px', marginTop: '26px'}}/> 
      <span>Возле водоема, реки</span>
      <br />
      <input type="checkbox" style={{width: '70px', height: '23px', marginTop: '26px'}}/> 
      <span>В предгорьях</span>
      </div>
      <div style={{width: '270px', height: '200px', marginLeft: '30px', position: 'absolute',marginLeft: '536px',marginTop: '-200px'}}>
      <input type="checkbox" style={{width: '70px', height: '23px', marginTop: '26px'}}/> 
      <span>В дачном массиве</span>
      <br />
      <input type="checkbox" style={{width: '70px', height: '23px', marginTop: '26px'}}/> 
      <span>На закрытой территории</span>
      
      </div>
      <select style={{width: '200px',height: '36px', marginLeft: '40px',borderRadius: '10px', border: 'none',fontSize: '18px', marginLeft: '20px', paddingLeft: '20px'}}>
        <option  value="">Тип дома</option>
        <option  value="">RUB</option>
      </select>
      <select style={{width: '200px',height: '36px', marginLeft: '40px',borderRadius: '10px', border: 'none',fontSize: '18px', marginLeft: '20px', paddingLeft: '20px'}}>
        <option  value="">Электричество</option>
        <option  value="">RUB</option>
      </select>
      <div className="mini-more-divs">
        <img style={{width: '600px', marginLeft: '100px', marginTop: '30px'}} src={Map} alt="" />
        <button onClick={handleClick} style={{marginTop: '40px'}} className="btn-sec-bottom-nav"> + Добавить обьявления</button>
      </div>
      </div>
    </>
  );
};

export default AddProduct;
