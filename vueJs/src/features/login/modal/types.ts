import { reactive } from "vue";

const formData = reactive({
  email: "",
  password: "",
});

const errors = reactive({
  email: "",
  password: "",
});

export { formData, errors };
