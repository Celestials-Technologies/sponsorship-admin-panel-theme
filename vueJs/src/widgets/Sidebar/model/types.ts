import { Component } from 'vue';

export interface NavigationItem {
  path: string;
  label: string;
  icon?: Component;
  children?: NavigationItem[];
} 