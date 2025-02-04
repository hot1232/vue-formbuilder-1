import Vue from 'vue';

import draggable from 'vuedraggable'

import TextInput from '@/components/form_elements/FormElementTextInput'
import LongTextInput from '@/components/form_elements/FormElementLongTextInput'
import NumberInput from '@/components/form_elements/FormElementNumberInput'
import SelectList from '@/components/form_elements/FormElementSelectList'
import RadioButton from '@/components/form_elements/FormElementRadioButton'
import Checkbox from '@/components/form_elements/FormElementCheckbox'
import TimePicker from '@/components/form_elements/FormElementTimePicker'
import DatePicker from '@/components/form_elements/FormElementDatePicker'
import DatetimePicker from '@/components/form_elements/FormElementDatetimePicker'
import Rating from '@/components/form_elements/FormElementRating'
import Button from '@/components/form_elements/FormElementButton'
import Carousel from '@/components/form_elements/FormElementCarousel'
import Upload from '@/components/form_elements/FormElementUpload'
import ElSwitch from '@/components/form_elements/FormElementSwitch'
import TableComponent from '@/components/form_elements/FormElementTable'
import HtmlComponent from '@/components/form_elements/FormElementHtml'

import Elements from '@/components/form_elements/Elements'
import Properties from '@/components/form_elements/properties/Properties'

import vm from '@/main'

export const FormBuilder = new Vue({
  components: {
    Elements,
    Properties,
    draggable,
    TextInput,
    LongTextInput,
    NumberInput,
    SelectList,
    RadioButton,
    Checkbox,
    TimePicker,
    DatePicker,
    DatetimePicker,
    Rating,
    Button,
    Carousel,
    Upload,
    ElSwitch,
    TableComponent,
    HtmlComponent
  },
  data() {
    return {
      fields: [{
          fieldType: 'TextInput',
          label: 'text',
          text: 'text',
          group: 'form', //form group
          isRequired: false,
          isHelpBlockVisible: false,
          isPlaceholderVisible: true,
          isUnique: false,
          span: 8,
          labelWidth: 100,
          advancedOptions: true,
          showPassword: false,
          disabled: false,
          clearable: false,
          prepend: '',
          append: '',
          maxlength: 10,
          showWordLimit: false
        },
        {
          fieldType: 'LongTextInput',
          label: 'Long Text',
          text: 'Long Text',
          group: 'form',
          isRequired: false,
          isHelpBlockVisible: false,
          isPlaceholderVisible: true,
          isUnique: false,
          span: 24,
          labelWidth: 100
        },
        {
          fieldType: 'NumberInput',
          label: 'Number',
          text: 'Number',
          group: 'form',
          isRequired: false,
          isHelpBlockVisible: false,
          isPlaceholderVisible: false,
          isUnique: false,
          span: 8,
          labelWidth: 100,
          advancedOptions: true,
          disabled: false,
          stepStrictly: false,
          step: 1,
          hasMinValue: false,
          min: 1,
          hasMaxValue: false,
          max: 10,
        },
        {
          fieldType: 'SelectList',
          label: 'Select',
          text: 'Select',
          group: 'form',
          isRequired: false,
          isHelpBlockVisible: false,
          isPlaceholderVisible: false,
          isUnique: false,
          span: 8,
          labelWidth: 100,
          isFromUrl: false,
          dataUrl: '',
          options: [{
              optionLabel: "Option Label 1",
              optionValue: "Option 1"
            },
            {
              optionLabel: "Option Label 2",
              optionValue: "Option 2"
            }
          ],
          advancedOptions: true,
          dataUrl: '',
          labelField: 'label',
          valueField: 'value',
          disabled: false,
          clearable: false,
          multiple: false,
          filterable: false,
          remote: false
        },
        {
          fieldType: 'RadioButton',
          label: 'Radio',
          text: 'Radio',
          group: 'form',
          isRequired: false,
          isHelpBlockVisible: false,
          isPlaceholderVisible: false,
          isUnique: false,
          span: 8,
          labelWidth: 100,
          isFromUrl: false,
          options: [{
              optionLabel: "Option Label 1",
              optionValue: "Option 1"
            },
            {
              optionLabel: "Option Label 2",
              optionValue: "Option 2"
            }
          ],
          advancedOptions: true,
          dataUrl: '',
          labelField: 'label',
          valueField: 'value'
        },
        {
          fieldType: 'Checkbox',
          label: 'Checkbox',
          text: 'Checkbox',
          group: 'form',
          isRequired: false,
          isHelpBlockVisible: false,
          isPlaceholderVisible: false,
          isUnique: false,
          span: 8,
          labelWidth: 100,
          isFromUrl: false,
          options: [{
              optionLabel: "Option Label 1",
              optionValue: "Option 1"
            },
            {
              optionLabel: "Option Label 2",
              optionValue: "Option 2"
            }
          ],
          advancedOptions: true,
          dataUrl: '',
          labelField: 'label',
          valueField: 'value'
        },
        {
          fieldType: 'TimePicker',
          label: 'Time',
          text: 'Time',
          group: 'form',
          isRequired: false,
          isHelpBlockVisible: false,
          isPlaceholderVisible: false,
          isUnique: false,
          span: 8,
          labelWidth: 100
        },
        {
          fieldType: 'DatePicker',
          label: 'Date',
          text: 'Date',
          group: 'form',
          isRequired: false,
          isHelpBlockVisible: false,
          isPlaceholderVisible: false,
          isUnique: false,
          span: 8,
          labelWidth: 100
        },
        {
          fieldType: 'DatetimePicker',
          label: 'Date time',
          text: 'Date-Time',
          group: 'form',
          isRequired: false,
          isHelpBlockVisible: false,
          isPlaceholderVisible: false,
          isUnique: false,
          span: 8,
          labelWidth: 100
        },
        {
          fieldType: 'Rating',
          label: 'Rating',
          text: 'Rating',
          group: 'form',
          isRequired: false,
          isHelpBlockVisible: false,
          isPlaceholderVisible: false,
          isUnique: false,
          span: 8,
          labelWidth: 100,
          advancedOptions: true,
          rateValue: 0,
          showText: true,
          disabled: false,
          showScore: false,
          scoreUnit: 'points',
          colors: ['#AAAAAA', '#F7BA2A', '#FF9900'],
          texts: ['oops', 'disappointed', 'normal', 'good', 'great']
        },
        {
          fieldType: 'ElSwitch',
          label: 'Switch',
          text: 'Switch',
          group: 'form',
          isUnique: false,
          span: 8,
          labelWidth: 100,
          activeText: '',
          inActiveText: ''
        },
        {
          fieldType: 'Button',
          text: 'Button',
          group: 'button',
          buttonText: 'Submit your form',
          isRequired: false,
          isHelpBlockVisible: false,
          isPlaceholderVisible: false,
          isUnique: true,
          span: 8,
          labelWidth: 100
        },
        {
          fieldType: 'Carousel',
          text: 'Carousel',
          group: 'static',
          isUnique: false,
          span: 24,
          labelWidth: 100,
          controlHeight: 150,
          itemsNumber: 4,
          items: [{
            url:''
          }]
        },
        {
          fieldType: 'Upload',
          text: 'UploadFiles',
          group: 'form',
          isUnique: false,
          span: 24,
          uploadURL: 'https://jsonplaceholder.typicode.com/posts/'
        },
        {
          fieldType: 'TableComponent',
          text: 'Table',
          group: 'form',
          isUnique: false,
          span: 24,
          tableColumns: [{
            prop: 'date',
            label: 'Date',
            width: 180
          }, {
            prop: 'name',
            label: 'Name',
            width: 180
          }, {
            prop: 'address',
            label: 'Address'
          }],
          tableDatas:  [{
            id: 1,
            edit: false,
            date: '2016-05-03',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }]
        },
        {
          fieldType: 'HtmlComponent',
          text: 'Html',
          group: 'static',
          isUnique: false,
          span: 24,
          htmlContent: '<h3>Hello World</h3>',
          advancedOptions: ''
        }
      ],

      sortElementOptions: {
        group: {
          name: 'formbuilder',
          pull: false,
          put: true
        },
        sort: true
      },

      dropElementOptions: {
        group: {
          name: 'formbuilder',
          pull: 'clone',
          put: false
        },
        sort: false,
        filter: ".is-disabled"
      }
    }
  },
  methods: {
    deleteElement(index) {
      vm.$store.activeForm = [];
      vm.$store.activeTabForFields = "elements";
      vm.$delete(vm.$store.forms, index);
    },

    cloneElement(index, form) {
      var cloned = _.cloneDeep(form) // clone deep lodash
      vm.$store.forms.splice(index, 0, cloned)
    },

    editElementProperties(form) {
      vm.$store.activeForm = form;
      vm.$store.activeTabForFields = "properties";
    }
  }
});
