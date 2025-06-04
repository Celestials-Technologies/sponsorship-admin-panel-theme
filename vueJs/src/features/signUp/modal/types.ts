import { reactive } from "vue";

const formData = reactive({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
});

const errors = reactive({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
});

export { formData, errors };
