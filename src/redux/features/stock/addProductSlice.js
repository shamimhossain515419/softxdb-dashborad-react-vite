// / productsSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

const addProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const { product_id, color_id, size_id } = action.payload;

      const existingProductIndex = state.products.findIndex(
        product => product.product_id === product_id
      );

      const existingProductColor = state.products.findIndex(
        product => product.color_id === color_id
      );

      const existingProductSize = state.products.findIndex(
        product => product.size_id === size_id
      );

      if (existingProductIndex !== -1) {
        // If product with the same product_id already exists, update its properties
        state.products.push(action.payload);
      } else {
        // If product doesn't exist, add it to the state
        state.products.push(action.payload);
      }
    },

    // const addToCart = (any) => {
    // e.preventDefault();

    // const serial_count = selectedProduct?.serial_status && serial.split(' ').length;

    // if (selectedProduct.serial_status) {
    // 	if (serial_count != Quantity) {
    // 		showNotification(
    // 			'Error',
    // 			<div className='row d-flex align-items-center'>
    // 				<div className='col-auto'>
    // 					<h5 className=''>{'Serial and quantity not matching'}</h5>
    // 				</div>
    // 				<div className=''></div>
    // 			</div>,
    // 		);
    // 		return;
    // 	}
    // }

    // // Validate necessary fields are filled
    // if (!Quantity || !Price || !total_Price_calculator || !selectedProduct) {
    // 	alert('Please fill in all required fields');
    // 	return;
    // }

    // //existingIndex
    // const existingColor = allProduct?.find((p) => p?.color_id === color?.id);
    // const existingSize = allProduct?.find((p) => p?.size_id === size?.id);

    // const existingProduct = allProduct?.find((p) => p?.product_id === selectedProduct?.id);
    // const condition = allProduct?.color_status
    // 	? existingColor
    // 	: '' && allProduct?.size_status
    // 	? existingSize
    // 	: '';

    // // done
    // if (selectedProduct?.color_status && selectedProduct?.size_status)
    // 	if (existingColor && existingSize && existingProduct) {
    // 		showNotification(
    // 			'Error',
    // 			<div className='row d-flex align-items-center'>
    // 				<div className='col-auto'>
    // 					<h5 className=''>{'Product already exists'}</h5>
    // 				</div>
    // 				<div className=''></div>
    // 			</div>,
    // 		);
    // 		return;
    // 	}
    // // done
    // if (selectedProduct?.color_status && !selectedProduct?.size_status) {
    // 	if (existingColor && existingProduct) {
    // 		showNotification(
    // 			'Error',
    // 			<div className='row d-flex align-items-center'>
    // 				<div className='col-auto'>
    // 					<h5 className=''>{'Product already exists'}</h5>
    // 				</div>
    // 				<div className=''></div>
    // 			</div>,
    // 		);
    // 		return;
    // 	}
    // }

    // if (selectedProduct?.size_status && !selectedProduct?.color_status) {
    // 	if (existingSize && existingProduct) {
    // 		showNotification(
    // 			'Error',
    // 			<div className='row d-flex align-items-center'>
    // 				<div className='col-auto'>
    // 					<h5 className=''>{'Product already exists'}</h5>
    // 				</div>
    // 				<div className=''></div>
    // 			</div>,
    // 		);
    // 		return;
    // 	}
    // }
    // if (!selectedProduct?.size_status && !selectedProduct?.color_status) {
    // 	if (existingProduct) {
    // 		showNotification(
    // 			'Error',
    // 			<div className='row d-flex align-items-center'>
    // 				<div className='col-auto'>
    // 					<h5 className=''>{'Product already exists'}</h5>
    // 				</div>
    // 				<div className=''></div>
    // 			</div>,
    // 		);
    // 		return;
    // 	}
    // }

    // // Prepare the values to add to the cart

    // const allValues = {
    // 	product_name: selectedProduct?.name,
    // 	product_id: selectedProduct?.id,
    // 	color_name: selectedProduct.color_status ? color?.color_name : null,
    // 	color_id: selectedProduct.color_status ? color?.id : null,
    // 	size_name: selectedProduct.size_status ? size?.size_name : null,
    // 	size_id: selectedProduct.size_status ? size?.id : null,
    // 	serial_array: selectedProduct.serial_status ? serial : null,
    // 	serial_status: selectedProduct.serial_status,
    // 	purchase_price: Price,
    // 	quantity: Quantity,
    // 	total_price: total_Price_calculator,
    // };

    // // f

    // // Update the products in the cart and reset the form
    // setAllProduct([...allProduct, allValues]);
    // e.target.reset();

    // setQuantity(0);
    // setPrice(0);
    // setSize('');
    // setColor('');
    // setSerial('');
    // setSelectedProduct([]);
    // };

    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        product => product.product_id !== action.payload
      );
    },

    deleteAllProducts: state => {
      state.products = [];
    },
  },
});

export const { addProduct, deleteAllProducts, deleteProduct } =
  addProductSlice.actions;
export default addProductSlice.reducer;
