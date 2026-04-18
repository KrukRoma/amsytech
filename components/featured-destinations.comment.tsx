// "use client"

// import { Card } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { FileText, ArrowRight } from "lucide-react"
// import React from "react"
// import { products } from "@/lib/products"

// export function FeaturedDestinations() {
//   return (
//     <section id="destinations" className="py-32 bg-background">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="max-w-3xl mb-20 text-center mx-auto">
//           <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance">
//             <span className="font-semibold">Найкращі Продукти</span>
//           </h2>
//           <p className="text-lg text-muted-foreground text-balance leading-relaxed">
//             Відібрані інженерні рішення, що забезпечують надійну роботу та ефективність
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {products.map((product, index) => {
//             // Add empty block before Iceland to center it on large screens
//             if (product.name === "Таймери для опалення") {
//               return (
//                 <React.Fragment key={index}>
//                   <div className="hidden lg:block" /> {/* Empty block for alignment */}
//                   <Card
//                     className="group overflow-hidden border-0 bg-card hover:shadow-2xl transition-all duration-500 cursor-pointer"
//                     onClick={(e) => {
//                       // Check if click is on documentation link
//                       const target = e.target as HTMLElement
//                       if (!target.closest('a[href^="#documentation"]') && !target.closest('a[target="_blank"]')) {
//                         sessionStorage.setItem("scrollPosition", window.scrollY.toString())
//                         window.location.href = `/products/${product.id}`
//                       }
//                     }}
//                   >
//                     {/* Image */}
//                     <div className="relative h-80 overflow-hidden">
//                       <img
//                         src={product.image || "/placeholder.svg"}
//                         alt={product.name}
//                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />

//                       <a
//                         href={product.docsUrl}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="absolute top-4 left-4 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors z-10"
//                         onClick={(e) => e.stopPropagation()}
//                       >
//                         <FileText className="h-4 w-4 text-primary" />
//                       </a>
//                     </div>

//                     {/* Content */}
//                     <div className="p-6 space-y-4">
//                       <div>
//                         <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
//                         <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
//                       </div>

//                       <div className="flex items-center justify-between pt-4 border-t border-border">
//                         <span className="text-sm font-semibold text-primary">{product.price}</span>
//                         <Button variant="ghost" size="sm" className="group/btn text-foreground hover:text-primary">
//                           Дізнатися
//                           <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
//                         </Button>
//                       </div>
//                     </div>
//                   </Card>
//                 </React.Fragment>
//               )
//             }

//             return (
//               <Card
//                 key={index}
//                 className="group overflow-hidden border-0 bg-card hover:shadow-2xl transition-all duration-500 cursor-pointer"
//                 onClick={(e) => {
//                   // Check if click is on documentation link
//                   const target = e.target as HTMLElement
//                   if (!target.closest('a[href^="#documentation"]') && !target.closest('a[target="_blank"]')) {
//                     sessionStorage.setItem("scrollPosition", window.scrollY.toString())
//                     window.location.href = `/products/${product.id}`
//                   }
//                 }}
//               >
//                 {/* Image */}
//                 <div className="relative h-80 overflow-hidden">
//                   <img
//                     src={product.image || "/placeholder.svg"}
//                     alt={product.name}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />

//                   <a
//                     href={product.docsUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="absolute top-4 left-4 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors z-10"
//                     onClick={(e) => e.stopPropagation()}
//                   >
//                     <FileText className="h-4 w-4 text-primary" />
//                   </a>
//                 </div>

//                 {/* Content */}
//                 <div className="p-6 space-y-4">
//                   <div>
//                     <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
//                     <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
//                   </div>

//                   <div className="flex items-center justify-between pt-4 border-t border-border">
//                     <span className="text-sm font-semibold text-primary">{product.price}</span>
//                     <Button variant="ghost" size="sm" className="group/btn text-foreground hover:text-primary">
//                       Дізнатися
//                       <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
//                     </Button>
//                   </div>
//                 </div>
//               </Card>
//             )
//           })}
//         </div>
//       </div>
//     </section>
//   )
// }
