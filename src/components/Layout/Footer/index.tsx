import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";

// MIDDLE LINKS DATA
interface ProductType {
  id: number;
  section: string;
  link: string[];
}

const products: ProductType[] = [
  {
    id: 1,
    section: "Company",
    link: ['About us', 'Blog', 'Contact us', 'Pricing', 'Testimonials'],
  },
  {
    id: 2,
    section: "Support",
    link: ['Help center', 'Terms of service', 'Legal', 'Privacy Policy', 'Status']
  }
]

const footer = () => {
  return (
    <div className="bg-primary h-[300px] flex items-end justify-center" id="first-section">
      {/* All Rights Reserved */}
      <div className='py-8 px-4'>
        <h3 className='text-center text-white/60'>@2025 - All Rights Reserved by</h3>
      </div>

    </div>
  )
}

export default footer;
