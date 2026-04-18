// import { getProductById, products } from "@/lib/products"
// import { notFound } from "next/navigation"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Card } from "@/components/ui/card"
// import { ArrowLeft, FileText, ArrowRight } from "lucide-react"
// import Navbar from "@/components/navbar"
// import Footer from "@/components/footer"

// export function generateStaticParams() {
//   return products.map((product) => ({
//     id: product.id,
//   }))
// }

// export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
//   const { id } = await params
//   const product = getProductById(id)

//   if (!product) {
//     notFound()
//   }

//   const otherProducts = products.filter((p) => p.id !== product.id)

//   return (
//     <div className="min-h-screen bg-background">
//       {/* Navbar */}
//       <Navbar />

//       {/* Back Button */}
//       <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-8">
//         <Link href="/#destinations">
//           <Button variant="ghost" className="group -ml-4">
//             <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
//             Назад до продуктів
//           </Button>
//         </Link>
//       </div>

//       {/* Product Details */}
//       <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
//         <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
//           {/* Product Image */}
//           <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
//             <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-full object-cover" />
//           </div>

//           {/* Product Info */}
//           <div className="flex flex-col space-y-6">
//             <div>
//               <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-balance">{product.name}</h1>
//               <p className="text-xl text-muted-foreground leading-relaxed">{product.description}</p>
//             </div>

//             <div className="flex items-center gap-4 pt-4">
//               <span className="text-3xl font-semibold text-primary">{product.price}</span>
//             </div>

//             <div className="space-y-4">
//               <h2 className="text-2xl font-semibold">Детальний опис</h2>
//               <p className="text-muted-foreground leading-relaxed">{product.longDescription}</p>
//             </div>

//             <div className="pt-4">
//               <a href={product.docsUrl} target="_blank" rel="noopener noreferrer">
//                 <Button size="lg" className="w-full md:w-auto">
//                   <FileText className="mr-2 h-5 w-5" />
//                   Переглянути документацію
//                 </Button>
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Other Products */}
//       <section className="bg-muted/50 py-24">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">Інші продукти</h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {otherProducts.map((otherProduct) => (
//               <Link href={`/products/${otherProduct.id}`} key={otherProduct.id} className="block">
//                 <Card className="group overflow-hidden border-0 bg-card hover:shadow-2xl transition-all duration-500 cursor-pointer">
//                   <div className="relative h-64 overflow-hidden">
//                     <img
//                       src={otherProduct.image || "/placeholder.svg"}
//                       alt={otherProduct.name}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
//                   </div>

//                   <div className="p-6 space-y-4">
//                     <div>
//                       <h3 className="text-xl font-semibold mb-2">{otherProduct.name}</h3>
//                       <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
//                         {otherProduct.description}
//                       </p>
//                     </div>

//                     <div className="flex items-center justify-between pt-4 border-t border-border">
//                       <span className="text-sm font-semibold text-primary">{otherProduct.price}</span>
//                       <Button variant="ghost" size="sm" className="group/btn text-foreground hover:text-primary">
//                         Дізнатися
//                         <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
//                       </Button>
//                     </div>
//                   </div>
//                 </Card>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <Footer />
//     </div>
//   )
// }
