"use client"

export function FeaturedDestinations() {
  return (
    <section id="destinations" className="py-32 bg-background">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20 text-center">
          <h2 className="text-5xl md:text-6xl mb-6">
            <span className="bg-gradient-to-r from-black via-[#003300] via-[#006600] to-[#008000] bg-clip-text text-transparent font-semibold">
              Наша продукція
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Інженерні рішення нового покоління для розумного, ефективного та безпечного опалення
          </p>
        </div>

        {/* Content Blocks */}
        <div className="space-y-8">
          {/* Block 1 */}
          <div className="p-8 rounded-2xl bg-card border border-border hover:shadow-xl transition duration-500">
            <h3 className="text-2xl mb-4">
              Сучасні технології
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Ми створюємо обладнання, яке поєднує інновації та практичність. Кожне рішення
              розроблене з урахуванням реальних умов експлуатації та потреб користувачів —
              від приватних будинків до промислових об’єктів.
            </p>
          </div>

          {/* Block 2 */}
          <div className="p-8 rounded-2xl bg-card border border-border hover:shadow-xl transition duration-500">
            <h3 className="text-2xl mb-4">
              Ефективність та економія
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Наші системи допомагають автоматизувати процеси та значно зменшити витрати енергії.
              Інтелектуальне керування оптимізує роботу обладнання, забезпечуючи максимальний комфорт
              при мінімальних витратах.
            </p>
          </div>

          {/* Block 3 */}
          <div className="p-8 rounded-2xl bg-card border border-border hover:shadow-xl transition duration-500">
            <h3 className="text-2xl mb-4">
              Безпека та надійність
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Ми приділяємо особливу увагу безпеці. Всі продукти проходять контроль якості та
              відповідають сучасним стандартам, що гарантує стабільну та довготривалу роботу.
            </p>
          </div>

          {/* Block 4 */}
          <div className="p-8 rounded-2xl bg-gradient-to-r from-[#008000]/5 via-[#008000]/10 to-[#008000]/5 border border-border hover:shadow-2xl transition duration-500">
            <h3 className="text-2xl mb-4">
              Комфорт без зусиль
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Наша мета — створювати продукти, які працюють за вас. Ви отримуєте стабільне тепло,
              автоматизацію та зручність без необхідності постійного контролю.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}