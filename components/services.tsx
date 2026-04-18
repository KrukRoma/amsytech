"use client"

const cards = [
  {
    title: "Житлова нерухомість",
    subtitle: "Будинки, квартири, дачі",
    description: null,
    items: [
      "Знаходимо містки холоду у стінах, кутах та перекриттях",
      "Перевіряємо якість монтажу вікон та дверей (протяги, конденсат)",
      "Виявляємо дефекти утеплення фасадів та покрівлі",
    ],
  },
  {
    title: "Електромережі та обладнання",
    subtitle: null,
    description: null,
    items: [
      "Діагностуємо перегрів контактів у щитках та проводці (запобігання пожежам)",
      "Перевіряємо роботу сонячних панелей, трансформаторів та двигунів",
      "Знаходимо критичні точки навантаження без зупинки роботи мережі",
    ],
  },
  {
    title: "Системи опалення та водопостачання",
    subtitle: null,
    description: null,
    items: [
      "Точно локалізуємо витоки в теплій підлозі та стінах без демонтажу покриття",
      "Перевіряємо рівномірність прогріву радіаторів та ефективність котлів",
      "Знаходимо засмічення в трубах та повітряні пробки",
    ],
  },
  {
    title: "Промисловість та бізнес",
    subtitle: null,
    description: null,
    items: [
      "Обстеження складів, холодильних камер та виробничих ліній",
      "Діагностика цілісності димових труб та теплотрас",
      "Пошук зон витоку холоду в промислових рефрижераторах",
    ],
  },
]

export function Services() {
  return (
    <section id="contact" className="py-32 bg-background">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        <div className="mb-20 text-center">
          <h2 className="text-5xl md:text-6xl mb-6">
            Професійна тепловізійна діагностика
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Не вгадуйте причини тепловтрат чи поломок — подивіться на них крізь тепловізор.
            Ми проводимо комплексне обстеження об'єктів будь-якої складності: від міської квартири
            до промислового цеху.
          </p>
        </div>

        <div className="space-y-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="p-8 rounded-2xl bg-card border border-border hover:shadow-xl transition duration-500"
            >
              <h3 className="text-2xl mb-1">{card.title}</h3>
              {card.subtitle && (
                <p className="text-sm text-muted-foreground mb-4">{card.subtitle}</p>
              )}
              <ul className="mt-4 space-y-2">
                {card.items.map((item) => (
                  <li
                    key={item}
                    className="text-muted-foreground leading-relaxed text-lg pl-4 relative before:content-['•'] before:absolute before:left-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}