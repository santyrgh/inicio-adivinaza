import React, { useState, useEffect } from 'react'

export const App = () => {

 // primero hay que darle un estado al formulario con el useState
 const [Form, setForm] = useState({
  user: '',
  pass: '',
  captcha: ''
})
 //  estado del menu del formulario con el useState

// renderizado
const [ ap , setap]= useState(false)
const [ apm , setapm]= useState(false)
const [ menu2 , setmenu2]= useState(false)


//Extraer los valores del useState con desestructuracion:
const { user, pass, captcha , } = Form;

 //sacar el ultimo digito primero sacr el de user con .slice y se guarda en una constante nueva
  const UltimoDigitoUser = user.slice(8,9);
  const UltimoDigitoPass = pass.slice(8,9);

//validacion de renderizado 

const validacionm = (e) =>{ //menu meergente
setapm(true)
}
const retornom = (e) =>{  // retorno de menu emergente
setapm(false)
}
const menu2a = (e) =>{  // retorno de menu emergente
  setmenu2(true)
  }
  const menura = (e) =>{ // 
setmenu2(false)
  }




  // controlar el formulario
  const Submit = (e) => {
   
    e.preventDefault()
      if(user==='123456789' && pass==='987654321' && captcha==='10')  
        alert('SESION INICIADA.'),setapm(validacionm)
       
     else  alert('LOS DATOS NO COINCIDEN.')
        setTimeout(() => {
         setap('')  
        setForm({
          user:'',
          pass:'',
          captcha:''
        })
    }, 2000);  
    
  }

  const inputUser = (e) => {
    //llamas al setForm para cambiar el valor,
    //"...Form": Es como decirle cambia el valor de user y guardame los demas datos que son pass y captcha
    setForm({
      ...Form,
      user: e.target.value
    })
  }
  
  const inputPass = (e) => {
    setForm({
      ...Form,
      pass: e.target.value

    })
  }

  const inputCaptcha = (e) => {
    setForm({
      ...Form,
      captcha: e.target.value
    })
  }
  ///menu del div 2
  const [OptionBD, setOptionBD] = useState({
    option: ''
  })
  const handleOption = (e) => {
    setOptionBD({
      ...OptionBD,
      option: e.target.value
    })
  }
  // menu 3
const [ opcionm3, setopcionm3] = useState({
  menu3:''
})
const handlemenu3 = (e) => {
  setopcionm3({
    ...opcionm3,
    menu3: e.target.value
  })
}
  //extraer Option de el useState
  const {option } = OptionBD;
  const {menu3 } = opcionm3;

  //numero al azar
  const [num, setNum] = useState(0);


  const Submit2 = (e) => {
    e.preventDefault();
   
    if( option === '1' ){
         setmenu2(menu2a),setNum(Math.floor( Math.random()*10));
         
    }else{
      if( option === '2'){
        setapm(retornom),alert('HASTA PRONTO.')
    }else {
      if( contador === 3){
        alert('LIMITE DE INTENTOS ALCANZADOS.'),setapm(retornom) 
      }
     else {
      if (option != '1', '2'){
        alert('ERROR.')
        setTimeout(() => {
          setOptionBD({
            option: ''
          })
        }, 100);
        
      }
     }
    }
     }}
     
     
     const Submit3 = (e) =>{
       e.preventDefault();
  
    if( menu3 == num ){
      alert('Felicidades lo adivinaste en  ' + contador2 + '   intentos.'),setmenu2(menura),setmenu2(reincio)

    }
    if( menu3 > 10 || menu3 < 0){
      alert('ESTAS FUERA DE LOS PARAMETROS.')
    }else{
      if( menu3 > num ){
        alert('TE PASASTE.')
      }
      else{
        if(menu3 < num ){
             alert('ESTAS POR DEBAJO.')
        } 
        
      }
    }
     }
     

     
   ///contador
   const [contador , setcontador] = useState(0);

   useEffect(() =>{
console.log("primer contador:" + contador)
   },[contador]);

   const aumentar = () =>{
    setcontador(contador + 1)
   }
   //// contador 2
   const [ contador2 , setcontador2] = useState(0);
   useEffect(() =>{
    console.log("segundo contador:" + contador2)
   }, [contador2]);

   const aumentar2 = () =>{
    setcontador2(contador2 + 1)
   }
  const  reincio = () =>{
    setcontador2(contador2 - contador2)
  }

//todos los mesajes


  return (
 
    <div className="parent">
        <div className="div1">
<h2>Bienvenidos al sistema localizacion de zonas de acceso wifi</h2>
                  <br></br>
              <form id="f1" onSubmit={ Submit } >
                  <legend><h3>INICIO DE SESION</h3></legend>
                  <br></br>
                 <input
                 type='text' //tipo de input
                 name='user' //nombre del inpu
                 placeholder='Usuario' //nombre visible
                 maxLength={ 10 }
                 value={ Form.user } //dentro del Form buscame a user) y ahora para modificar el valor:
                 onChange={ inputUser }
                 /><br/><br></br>
                 <input
                 type='password'           
                 name='pass'
                 placeholder='Contraseña'
                 maxLength={ 10 }
                 value={ Form.pass }
                 onChange={ inputPass }
                 />
                  <br/> <br></br>
                  <div className='captcha'>
                  { UltimoDigitoUser } + { UltimoDigitoPass }

                  </div>
                  <input
                  type='text'
                  name='captcha'
                  placeholder='RESPONDE LA SUMA'
                  maxLength={3} //maximo de digito
                  value={ Form.captcha}
                  onChange={ inputCaptcha }
                  /><br/><br/>
                  <button type="submit">INGRESAR</button><br/><br/>
                 

             </form>
{ ap ?<div id="m">
 
 </div>: undefined} 
        </div>



     { apm?  <div className="div2">
              
        <h1>BIENVENIDO</h1><br></br>
        <h2>MENU</h2>
    <form onSubmit={ Submit2 }>
          <label>1:ADIVINAZA </label>
          <br></br><br></br>
          <label>2:CERRAR SESSION </label>
          <br></br><br></br>
          <input
          type='text'
          name=''
          maxLength={3}
          placeholder='INGRESA TU OPCION'
          value={ OptionBD.option}
          onChange={ handleOption } 
          />
        <br></br><br></br>
        <button type="submit"
        onClick={aumentar}
        >VALIDAR RESPUESTA</button><br/><br/>
      </form>
        </div>:undefined}      
              
      { menu2 ?
        <div className="div3">
        <form onSubmit={ Submit3 }>
            <h1>ADIVINANZA</h1>
                <br></br><br></br>
            <h2>ELIGE UN NUMERO ENTRE ¨0 y 10¨ </h2>
            <br></br><br></br>
              <input
            type='text'
            name=''
            maxLength={3}
            placeholder='RESPUESTA'
            value={ opcionm3.menu3}
            onChange={handlemenu3}
            />
            <br></br><br></br>
            <button type="submit"
            onClick={aumentar2}
            >¡¡¡ Adivinar!!!</button><br/><br/>
            </form>
          
        </div> : undefined}
           
           
    </div>
    
  )
}
