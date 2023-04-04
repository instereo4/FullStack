  import axios from "axios";
  import React, { useEffect, useRef } from "react";
  import styled from "styled-components";
  import { toast } from "react-toastify";
  import { ToggleSlider }  from "react-toggle-slider";
  import { useState } from "react";
  import './styles.css';
  
  const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 10px;
  `;
  
  const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  `;
  
  const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 10px;
  height: 40px;
  `;
  
  const Label = styled.label`
  
  `;
  
  const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
  &:hover {
    background-color: #000;
    color: #fff;
  }
  `;
  
  const Form = ({ getUsers, onEdit, setOnEdit }) => {
    const ref = useRef();
    
    useEffect(() => {
      if (onEdit) {
        const user = ref.current;
        
        user.cnpjcpf.value = onEdit.cnpjcpf;
        user.nome.value = onEdit.nome;
        user.email.value = onEdit.email;
        user.cep.value = onEdit.cep;
        user.rg.value = onEdit.rg;
        user.data_nascimento.value = onEdit.data_nascimento;
      }
    }, [onEdit]);
    
    const [radioValue, setRadioValue] = useState("");
    
    const handleRadioChange = (event) => {
      setRadioValue(event.target.value);
    };
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      const user = ref.current;
      
      // if (
      //   !user.cnpjcpf.value ||
      //   !user.nome.value ||
      //   !user.email.value ||
      //   !user.cep.value ||
      //   !user.rg.value ||
      //   !user.data_nascimento.value
      //   ) {
      //     return toast.warn("Preencha todos os campos!");
      //   }
        
        if (onEdit) {
          await axios
          .put("http://localhost:8800/" + onEdit.id, {
          cnpjcpf: user.cnpjcpf.value,
          nome: user.nome.value,
          email: user.email.value,
          cep: user.cep.value,
          rg: user.rg.value,
          data_nascimento: user.data_nascimento.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
      } else {
        await axios
        .post("http://localhost:8800", {
        cnpjcpf: user.cnpjcpf.value,
        nome: user.nome.value,
        email: user.email.value,
        cep: user.cep.value,
        rg: user.rg.value,
        data_nascimento: user.data_nascimento.value,
      })
      .then(({ data }) => toast.success(data))
      .catch(({ data }) => toast.error(data));
    }
    
    user.cnpjcpf.value = "";
    user.nome.value = "";
    user.email.value = "";
    user.cep.value = "";
    user.rg.value = "";
    user.data_nascimento.value = "";
    
    setOnEdit(null);
    getUsers();
  };
  
  
  const [showcompany, setshowcompany] = useState(true);
  
  function handleFormToggle() {
    setshowcompany(!showcompany);
  }
  
  
  
  
  return (  
    <FormContainer ref={ref} onSubmit={handleSubmit}>
    
    <button onClick={handleFormToggle}>
    {showcompany ? 'EMPRESA' : 'FORNECEDOR'}
    </button>
    {showcompany ? (
      <form onSubmit={handleSubmit}>
      
      {}
        <div class="parent">
        <InputArea>
        <Label>CNPJ / CPF</Label>
        <Input name="cnpjcpf" />
        </InputArea>
        </div>
        <div class="parent">
        <InputArea>
        <Label>Nome</Label>
        <Input name="nome" />
        </InputArea>
        </div>
        <div class="parent">
        <InputArea>
        <Label>CEP</Label>
        <Input name="cep" />
        </InputArea>
        </div>
   
        
        
        </form>
        ) : (
          <form onSubmit={handleSubmit}>
          
          {<div class="parent">
            <input type="radio" value="cnpj" name="escolha" id="cnpj"  checked={radioValue === "cnpj"}
            onChange={handleRadioChange}/>
            
            <label for="cnpj">CNPJ</label>
            <input type="radio" value="cpf" name="escolha" id="cnpj"  checked={radioValue === "cpf"}
            onChange={handleRadioChange}/>
            <label for="cpf">CPF</label>
            </div>}
            <div class="parent">
            <InputArea>
            <Label>CNPJ / CPF</Label>
            <Input name="cnpjcpf" />
            </InputArea>
            </div>
            <div class="parent">
            <InputArea>
            <Label>Nome</Label>
            <Input name="nome" />
            </InputArea>
            </div>
            <div class="parent">
            <InputArea>
            <Label>E-mail</Label>
            <Input name="email" type="email" />
            </InputArea>
            </div>
            <div class="parent">
            <InputArea>
            <Label>CEP</Label>
            <Input name="cep" />
            </InputArea>
            </div>
            
            {radioValue === "cnpj" && (
              <div>
              </div>
              )}
              {radioValue === "cpf" && (
                <div>
                <div class="parent">
                <InputArea>
                <Label>RG</Label>
                <Input name="rg" />
                </InputArea> 
                </div>
                <div class="parent">
                <InputArea>
                <Label>Data de Nascimento</Label>
                <Input name="data_nascimento" type="date" />
                </InputArea>
                </div>
                </div>
                )}
                
                </form>
                )}
           
                <Button type="submit">SALVAR</Button>
              
                
                </FormContainer>
                
                
                );
              };
              
              export default Form;
              