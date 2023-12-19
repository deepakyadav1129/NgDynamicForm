import { IForm } from "../interface/form.interface";

export const registerFormConfig : IForm= {
  formTitle: 'Registration form',
  saveBtnTitle: 'Register',
  resetBtnTitle:'Reset',
  formControl:[
    {
      "name":"firstName",
      "label":"First Name",
      "value":"",
      "placeholder":"",
      "class":"col-md-6",
      "type":"text",
      "validators":[
        {
          "validatorName":"required",
          "required":true,
          "message":"*Firstname is required"
        }
      ]
    },
    {
      "name":"lastName",
      "label":"Last Name",
      "value":"",
      "placeholder":"",
      "class":"col-md-6",
      "type":"text",
      "validators":[
        {
          "validatorName":"required",
          "required":true,
          "message":"*Last Name is required"
        },
        {
          "validatorName":"minlength",
          "minLength":5,
          "message":"Minimum char should be 5"
        }
      ]
    },
    {
      "name":"email",
      "label":"Email",
      "value":"",
      "placeholder":"",
      "class":"col-md-4",
      "type":"email",
      "validators":[
        {
          "validatorName":"required",
          "required":true,
          "message":"*Email is required"
        },
        {
          "validatorName":"email",
          "email":"email",
          "message":"Email is not valid"
        }
      ]
    },
    {
      "name":"mobile",
      "label":"Mobile",
      "value":"",
      "placeholder":"",
      "class":"col-md-4",
      "type":"number",
      "validators":[
        {
          "validatorName":"required",
          "required":true,
          "message":"*Mobile Number is required"
        },
        {
          "validatorName":"maxlength",
          "maxLength":10,
          "message":"Maximum 10 digit is allowed"
        }
      ]
    },
    {
      "name":"weight",
      "label":"Weight",
      "value":"",
      "placeholder":"Should be in Kgs",
      "class":"col-md-4",
      "type":"number",
      "validators":[
        {
          "validatorName":"required",
          "required":true,
          "message":"Weight is required"
        },
      ]
    },
    {
      "name":"height",
      "label":"Height",
      "value":"",
      "placeholder":"Should be in cms",
      "class":"col-md-4",
      "type":"number",
      "validators":[
        {
          "validatorName":"required",
          "required":true,
          "message":"*Weight is required"
        }
      ]
    },
    {
      "name":"gender",
      "label":"Gender",
      "value":"",
      "placeholder":"",
      "class":"col-md-4",
      "radioOptions":[
        "Male","Female"
      ],
      "type":"radio",
      "validators":[
        {
          "validatorName":"required",
          "required":true,
          "message":"*Gender is required"
        },
      ]
    },
    {
      "name":"trainer",
      "label":"Required Trainer",
      "value":"",
      "placeholder":"",
      "class":"col-md-4",
      "radioOptions":[
        "Yes","No"
      ],
      "type":"radio",
      "validators":[
        {
          "validatorName":"required",
          "required":true,
          "message":"*Selection is required"
        },
      ]
    },
    {
      "name":"package",
      "label":"Package",
      "value":"",
      "placeholder":"",
      "class":"col-md-4",
      "options":[
        {
          "id":1,"value":"Monthly"
        },
        {
          "id":2,"value":"Quaterly"
        },
        {
          "id":3,"value":"Yearly"
        },
      ],
      "type":"select",
      "validators":[
        {
          "validatorName":"required",
          "required":true,
          "message":"*Package is required"
        },
      ]
    },
    {
      "name":"motivation",
      "label":"Motivation",
      "value":"",
      "placeholder":"",
      "class":"col-md-4",
      "options":[
        {
          "id":1,"value":"Get Fit"
        },
        {
          "id":2,"value":"Gain More Muscle"
        },
        {
          "id":3,"value":"Weight Loss"
        },
      ],
      "type":"select",
      "validators":[
        {
          "validatorName":"required",
          "required":true,
          "message":"*Selection is required"
        },
      ]
    },
    {
      "name":"enquiryDate",
      "label":"Date of Enquiry",
      "value":"",
      "placeholder":"",
      "class":"col-md-4",
      "type":"date",
      "validators":[
        {
          "validatorName":"required",
          "required":true,
          "message":"*Enquiry Date is required"
        },
      ]
    },
  ]
};
