export interface Product {
  id: string;
  name: string;
  category: 'pupuk' | 'pakan';
  categoryLabel: string;
  price: number;
  unit: string;
  image: string;
  tag: string;
  shortDesc: string;
  description: string;
  benefits: string[];
  howToUse: string;
  specs: { label: string; value: string }[];
  rating: number;
  soldCount: number;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface SlideItem {
  id: number;
  title: string;
  subtitle: string;
  tagline: string;
  summary: string;
  badge: string;
  keyPoints: {
    title: string;
    desc: string;
    icon: string;
    highlight?: string;
  }[];
  metrics?: {
    value: string;
    label: string;
    note?: string;
  }[];
  quote?: string;
}

export interface OrderFormData {
  customerName: string;
  phone: string;
  deliveryMethod: 'pickup_rest_area' | 'shipping';
  vehiclePlate: string;
  shippingAddress: string;
  notes: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  location: string;
  text: string;
  rating: number;
  productBought: string;
}
