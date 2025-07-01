import { ref } from "vue";

const isOpen = ref(false);
const openDropdownIndex = ref(0);
const actionDropdownRefs = ref<HTMLElement[]>([]);

const calculateColor = (status: string) => {
  if (status === "Successful") {
    return "bg-[#00a385] text-white";
  } else if (status === "Pending") {
    return "bg-[#FFA51F] text-white";
  } else if (status === "Cancel") {
    return "bg-[#FF0000] text-white";
  }
};

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as Node;
  const currentDropdown = actionDropdownRefs.value[openDropdownIndex.value];

  if (currentDropdown && !currentDropdown.contains(target)) {
    isOpen.value = false;
    openDropdownIndex.value = 0;
  }
};

const setActionDropdownRef = (el: HTMLElement | null, index: number) => {
  if (el) {
    actionDropdownRefs.value[index] = el;
  }
};

const handleActionDropdown = (rowIndex: number) => {
  if (openDropdownIndex.value === rowIndex) {
    isOpen.value = !isOpen.value;
  } else {
    openDropdownIndex.value = rowIndex;
    isOpen.value = true;
  }
};

export {
  calculateColor,
  handleClickOutside,
  setActionDropdownRef,
  handleActionDropdown,
  isOpen,
  openDropdownIndex,
};
