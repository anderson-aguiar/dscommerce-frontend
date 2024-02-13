/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import './styles.css';
import { Link, useParams } from "react-router-dom";
import FormInput from '../../../components/FormInput';
import * as forms from '../../../utils/forms';
import * as productservice from '../../../services/product-service';
import FormTextArea from '../../../components/FormTextArea';

export default function ProductForm() {

  const params = useParams();
  const isEditing = params.productId !== 'create';

  const [formData, setFormData] = useState<any>({
    name: {
      value: "",
      id: "name",
      name: "name",
      type: "text",
      placeholder: "Nome",
      validation: function(value: string){
        return value.length >= 3 && value.length <= 80;
      },
      message: "Favor informar um nome de 3 a 80 caracteres"
    },
    price: {
      value: "",
      id: "price",
      name: "price",
      type: "number",
      placeholder: "Preço",
      validation: function(value: any){
        return Number(value) > 0;
      },
      message: "Favor informar um valor positivo"
    },
    imgUrl: {
      value: "",
      id: "imgUrl",
      name: "imgUrl",
      type: "text",
      placeholder: "Imagem",
    },
    description: {
      value: "",
      id: "description",
      name: "description",
      type: "text",
      placeholder: "Descrição",
      validation: function(value: string){
        return /^.{10,}$/.test(value);
      },
      message: "A descrição deve ter pelo menos 10 caracteres"
    }
  })

  useEffect(()=>{

    if (isEditing) {
      productservice.findById(Number(params.productId))
      .then(response => {
        const newFormData = forms.updateAll(formData, response.data);
        setFormData(newFormData);
      })
    }
  },[])

  function handleInputChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;
    const result = forms.updateAndValidate(formData, name, value);
    setFormData(result);
  }
  function handleTurnDirty(name: string){
    const newFormData = forms.dirtyAndValidate(formData, name);
    setFormData(newFormData);
  }

  return (
    <main>
      <section id="product-form-section" className="dsc-container">
        <div className="dsc-product-form-container">
          <form className="dsc-card dsc-form">
            <h2>Dados do produto</h2>
            <div className="dsc-form-controls-container">
              <div>
                <FormInput
                  {...formData.name}
                  className="dsc-form-control"
                  onChange={handleInputChange}
                  onTurnDirty={handleTurnDirty}
                />
                <div className='dsc-form-error'>{formData.name.message}</div>
              </div>
              <div>
                <FormInput
                  {...formData.price}
                  className="dsc-form-control"
                  onChange={handleInputChange}
                  onTurnDirty={handleTurnDirty}
                />
                <div className='dsc-form-error'>{formData.price.message}</div>
              </div>
              <div>
                <FormInput
                  {...formData.imgUrl}
                  className="dsc-form-control"
                  onChange={handleInputChange}
                  onTurnDirty={handleTurnDirty}
                />
              </div>
              <div>
                <FormTextArea
                  {...formData.description}
                  className="dsc-form-control dsc-textarea"
                  onChange={handleInputChange}
                  onTurnDirty={handleTurnDirty}
                />
                <div className='dsc-form-error'>{formData.description.message}</div>
              </div>
            </div>
            <div className="dsc-product-form-buttons">
              <Link to="/admin/products">
                <button type="reset" className="dsc-btn dsc-btn-white">Cancelar</button>
              </Link>
              <button type="submit" className="dsc-btn dsc-btn-blue">Salvar</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}