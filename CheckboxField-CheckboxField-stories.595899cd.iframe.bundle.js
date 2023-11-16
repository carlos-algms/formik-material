"use strict";(self.webpackChunkformik_material=self.webpackChunkformik_material||[]).push([[988],{"./src/CheckboxField/CheckboxField.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Validation:()=>Validation,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CheckboxField_stories});var Typography=__webpack_require__("./node_modules/.pnpm/@mui+material@5.14.18_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Typography/Typography.js"),dist=__webpack_require__("./node_modules/.pnpm/@storybook+addon-actions@7.5.3_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs"),index_esm=__webpack_require__("./node_modules/.pnpm/yup@1.3.2/node_modules/yup/index.esm.js"),FormDemo=__webpack_require__("./src/shared/FormDemo.tsx"),Checkbox=__webpack_require__("./node_modules/.pnpm/@mui+material@5.14.18_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Checkbox/Checkbox.js"),FormControl=__webpack_require__("./node_modules/.pnpm/@mui+material@5.14.18_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/FormControl/FormControl.js"),FormControlLabel=__webpack_require__("./node_modules/.pnpm/@mui+material@5.14.18_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/FormControlLabel/FormControlLabel.js"),formik_esm=__webpack_require__("./node_modules/.pnpm/formik@2.4.5_react@18.2.0/node_modules/formik/dist/formik.esm.js"),ErrorLabel=__webpack_require__("./src/ErrorLabel/ErrorLabel.tsx"),jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");let idCount=0;function CheckboxField({label="",name="CheckboxField-"+idCount++,className,color="primary",onBlur=identity,onChange=identity,...checkBoxProps}){return(0,jsx_runtime.jsx)(formik_esm.gN,{type:"checkbox",name,children:({field,meta:{error,touched}})=>{const{value,checked=!1}=field,indeterminate=!Array.isArray(value)&&null===value,isErrorState=Boolean(error&&touched),{onBlur:formikOnBlur,onChange:formikOnChange,...formikFieldProps}=field;return(0,jsx_runtime.jsxs)(FormControl.Z,{error:isErrorState,className,children:[(0,jsx_runtime.jsx)(FormControlLabel.Z,{label,control:(0,jsx_runtime.jsx)(Checkbox.Z,{indeterminate,checked,...checkBoxProps,...formikFieldProps,onBlur:e=>{formikOnBlur(e),onBlur(e)},onChange:(e,newValue)=>{formikOnChange(e),onChange(e,newValue)},color})}),isErrorState&&(0,jsx_runtime.jsx)(ErrorLabel.Z,{error})]})}})}function identity(v){return v}CheckboxField.displayName="CheckboxField";try{CheckboxField.displayName="CheckboxField",CheckboxField.__docgenInfo={description:"",displayName:"CheckboxField",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any>"}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/CheckboxField/CheckboxField.tsx#CheckboxField"]={docgenInfo:CheckboxField.__docgenInfo,name:"CheckboxField",path:"src/CheckboxField/CheckboxField.tsx#CheckboxField"})}catch(__react_docgen_typescript_loader_error){}const initialValues={read:!1,accept:!0},CheckboxField_stories={title:"Checkbox Field",component:CheckboxField},Basic={render:()=>(0,jsx_runtime.jsxs)(FormDemo.Z,{onSubmit:(0,dist.aD)("submitted"),initialValues,children:[(0,jsx_runtime.jsx)(Typography.Z,{variant:"h5",children:"Basic Example"}),(0,jsx_runtime.jsx)(CheckboxField,{name:"read",label:"Read and accept our terms"}),(0,jsx_runtime.jsx)(CheckboxField,{name:"accept",label:"I accept receiving newsletter",color:"secondary"})]})},Validation={render:()=>(0,jsx_runtime.jsxs)(FormDemo.Z,{onSubmit:(0,dist.aD)("submitted valid"),initialValues,validationSchema,children:[(0,jsx_runtime.jsx)(Typography.Z,{variant:"h5",children:"Validation"}),(0,jsx_runtime.jsx)(CheckboxField,{name:"read",label:"Read and accept our terms"}),(0,jsx_runtime.jsx)(CheckboxField,{name:"accept",label:"I accept receiving newsletter",color:"secondary"})]})},validationSchema=index_esm.Ry().shape({read:index_esm.O7().required().oneOf([!0]),accept:index_esm.O7().required()});Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:'{\n  render: () => <FormDemo onSubmit={action(\'submitted\')} initialValues={initialValues}>\n      <Typography variant="h5">Basic Example</Typography>\n      <CheckboxField name="read" label="Read and accept our terms" />\n      <CheckboxField name="accept" label="I accept receiving newsletter" color="secondary" />\n    </FormDemo>\n}',...Basic.parameters?.docs?.source}}},Validation.parameters={...Validation.parameters,docs:{...Validation.parameters?.docs,source:{originalSource:'{\n  render: () => <FormDemo onSubmit={action(\'submitted valid\')} initialValues={initialValues} validationSchema={validationSchema}>\n      <Typography variant="h5">Validation</Typography>\n      <CheckboxField name="read" label="Read and accept our terms" />\n      <CheckboxField name="accept" label="I accept receiving newsletter" color="secondary" />\n    </FormDemo>\n}',...Validation.parameters?.docs?.source}}};const __namedExportsOrder=["Basic","Validation"]},"./src/ErrorLabel/ErrorLabel.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@mui+material@5.14.18_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Typography/Typography.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const ErrorLabel=({error})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_1__.Z,{variant:"body2",component:"div",className:"error-label",color:"red",children:error});ErrorLabel.displayName="ErrorLabel";const __WEBPACK_DEFAULT_EXPORT__=ErrorLabel;try{ErrorLabel.displayName="ErrorLabel",ErrorLabel.__docgenInfo={description:"",displayName:"ErrorLabel",props:{error:{defaultValue:null,description:"",name:"error",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ErrorLabel/ErrorLabel.tsx#ErrorLabel"]={docgenInfo:ErrorLabel.__docgenInfo,name:"ErrorLabel",path:"src/ErrorLabel/ErrorLabel.tsx#ErrorLabel"})}catch(__react_docgen_typescript_loader_error){}},"./src/Form/Form.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Form});var formik__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/formik@2.4.5_react@18.2.0/node_modules/formik/dist/formik.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function Form({children,initialValues,onSubmitForm,validationSchema,validate,className}){return initialValues?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.J9,{initialValues,onSubmit:onSubmitForm,validationSchema,validate,children:formikProps=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.l0,{noValidate:!0,autoComplete:"off",className,children:"function"==typeof children?children(formikProps):children})}):null}Form.displayName="Form";try{Form.displayName="Form",Form.__docgenInfo={description:"Form Component",displayName:"Form",props:{initialValues:{defaultValue:null,description:"",name:"initialValues",required:!1,type:{name:"FormikValues"}},onSubmitForm:{defaultValue:null,description:"",name:"onSubmitForm",required:!0,type:{name:"OnSubmitFormCallback<T, any>"}},validationSchema:{defaultValue:null,description:"",name:"validationSchema",required:!1,type:{name:"any"}},validate:{defaultValue:null,description:"",name:"validate",required:!1,type:{name:"((values: T) => FormikErrors<T> | Promise<FormikErrors<T>>)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Form/Form.tsx#Form"]={docgenInfo:Form.__docgenInfo,name:"Form",path:"src/Form/Form.tsx#Form"})}catch(__react_docgen_typescript_loader_error){}},"./src/SubmitButton/SubmitButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/@mui+material@5.14.18_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Button/Button.js"),formik__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/formik@2.4.5_react@18.2.0/node_modules/formik/dist/formik.esm.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const SubmitButton=({children,className,disabled,...restProps})=>{const{isSubmitting,isValidating}=(0,formik__WEBPACK_IMPORTED_MODULE_2__.u6)(),isDisabled=disabled||isSubmitting&&!isValidating;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__.Z,{...restProps,variant:"contained",color:"primary",role:"button",type:"submit",disabled:isDisabled,children})})};SubmitButton.displayName="SubmitButton";const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SubmitButton);try{SubmitButton.displayName="SubmitButton",SubmitButton.__docgenInfo={description:"",displayName:"SubmitButton",props:{children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"((string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | ((props?: any) => ReactNode)) & (string | ... 4 more ... | ReactPortal)) | null"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/SubmitButton/SubmitButton.tsx#SubmitButton"]={docgenInfo:SubmitButton.__docgenInfo,name:"SubmitButton",path:"src/SubmitButton/SubmitButton.tsx#SubmitButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/FormDemo.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _Form__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Form/Form.tsx"),_SubmitButton__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/SubmitButton/SubmitButton.tsx"),_useFormSubmittedValues__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/useFormSubmittedValues.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const FormDemo=({children,onSubmit,initialValues,validationSchema})=>{const handle=(0,_useFormSubmittedValues__WEBPACK_IMPORTED_MODULE_1__.Z)(onSubmit);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Form__WEBPACK_IMPORTED_MODULE_2__.Z,{onSubmitForm:handle,initialValues,validationSchema,children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SubmitButton__WEBPACK_IMPORTED_MODULE_3__.Z,{children:"Submit"})]})};FormDemo.displayName="FormDemo";const __WEBPACK_DEFAULT_EXPORT__=FormDemo;try{FormDemo.displayName="FormDemo",FormDemo.__docgenInfo={description:"",displayName:"FormDemo",props:{initialValues:{defaultValue:null,description:"",name:"initialValues",required:!1,type:{name:"object"}},validationSchema:{defaultValue:null,description:"",name:"validationSchema",required:!1,type:{name:"any"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/FormDemo.tsx#FormDemo"]={docgenInfo:FormDemo.__docgenInfo,name:"FormDemo",path:"src/shared/FormDemo.tsx#FormDemo"})}catch(__react_docgen_typescript_loader_error){}},"./src/useFormSubmittedValues.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>src_useFormSubmittedValues});var react=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const src_useFormSubmit=function useFormSubmit(cb,deps){return(0,react.useCallback)(cb,deps)};const src_useFormSubmittedValues=function useFormSubmittedValues(callback){return src_useFormSubmit((async(values,formikHelpers)=>{const{setSubmitting}=formikHelpers,result=await callback(values,formikHelpers);return setSubmitting(!1),result}),[callback])}}}]);