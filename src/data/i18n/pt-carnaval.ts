// ---------------------------------------------------------------------------
// Carnaval no Egito — a Portuguese-only page, with no English original.
//
// Brazil's long holiday is Carnival, and in 2027 it falls in February: the best
// month of the year for the monuments. Brazilians book it in October and
// November. Nobody else publishes this page in Portuguese, which is the point.
//
// Every date and figure is read, not typed: the Carnival dates from the Easter
// computus, the Ramadan start from the seasonal calendar, February's
// temperatures from the month guide, the prices from the catalogue and the
// Ultra journeys. When any of those move, this page moves with them. The year
// rolls forward on its own after Carnival has passed.
// ---------------------------------------------------------------------------
import type { LocalizedPage } from "./types";
import { tours } from "@/data/tours";
import { ultraJourneys } from "@/data/ultra/journeys";
import { findMonth } from "@/data/months";
import { seasonalCalendar } from "@/data/seasonalCalendar";

/** Gregorian Easter (anonymous computus), as a UTC date. */
function easter(y: number): Date {
  const a = y % 19, b = Math.floor(y / 100), c = y % 100, d = Math.floor(b / 4), e = b % 4;
  const f = Math.floor((b + 8) / 25), g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30, i = Math.floor(c / 4), k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7, m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31), day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(Date.UTC(y, month - 1, day));
}
const DAY = 86_400_000;
const addDays = (d: Date, n: number) => new Date(d.getTime() + n * DAY);

// The next Carnival that has not yet happened, counted from the build date.
const now = new Date();
let YEAR = now.getUTCFullYear();
if (addDays(easter(YEAR), -46) < now) YEAR += 1;
const ASH = addDays(easter(YEAR), -46);      // Quarta-feira de Cinzas
const TUESDAY = addDays(ASH, -1);            // terça de Carnaval
const SATURDAY = addDays(ASH, -4);           // sábado de Carnaval
const FLY_OUT = addDays(SATURDAY, -1);       // embarque na sexta à noite
const FLY_HOME = addDays(SATURDAY, 9);       // dez dias no Egito
const BALANCE_DUE = addDays(SATURDAY, -30);

/** "6 a 10 de fevereiro", or "28 de fevereiro a 4 de março" across a month. */
const span = (a: Date, b: Date, sep = " a ") =>
  a.getUTCMonth() === b.getUTCMonth() ? `${a.getUTCDate()}${sep}${dm(b)}` : `${dm(a)}${sep}${dm(b)}`;
// "Book by November" only while November is still ahead.
const BOOK_BY = now < new Date(Date.UTC(YEAR - 1, 10, 30)) ? "até novembro" : "o quanto antes";

const dm = (d: Date) => d.toLocaleDateString("pt-BR", { day: "numeric", month: "long", timeZone: "UTC" });
const wd = (d: Date) => d.toLocaleDateString("pt-BR", { weekday: "long", timeZone: "UTC" }).replace("-feira", "");

// Ramadan, if it touches the Carnival fortnight.
const ramadan = seasonalCalendar.find((w) => w.key === "ramadan" && w.eventFrom && w.eventTo &&
  new Date(w.eventFrom) <= addDays(FLY_HOME, 1) && new Date(w.eventTo) >= SATURDAY);
const RAMADAN_START = ramadan?.eventFrom ? dm(new Date(`${ramadan.eventFrom}T00:00:00Z`)) : undefined;

const feb = findMonth("february")!;
const brl = (n: number) => `${new Intl.NumberFormat("pt-BR").format(n)} €`;
const tour = (slug: string) => tours.find((t) => t.slug === slug)!;
const T10 = tour("tour-10-day");
const T9 = tour("tour-honeymoon-9day");
const T8 = tour("tour-family-8day");
const PHARAOH = ultraJourneys.find((j) => j.id === "private-pharaoh")!;
const FLY_EXTRA = T10.flyOption?.extra;
const days = (t: { durationLabel: string }) => `${/^(\d+)/.exec(t.durationLabel)?.[1]} dias`;

const ramadanSection = RAMADAN_START
  ? {
      title: `Em ${YEAR}, o Ramadã começa na mesma semana`,
      body:
        `O Ramadã deve começar por volta de ${RAMADAN_START} — a data exata depende da lua. Na prática, pouco muda para quem viaja: os sítios arqueológicos abrem normalmente, às vezes com horário mais curto à tarde, e hotéis e barcos servem as refeições de sempre. O que muda é o ritmo da cidade: a tarde fica quieta e, ao pôr do sol, tudo se acende para o iftar, com lanternas no Cairo islâmico até de madrugada. Montamos o roteiro com as visitas cedo, e muitos viajantes contam depois que essas noites foram a parte mais marcante da viagem.`,
    }
  : undefined;

export const carnaval: LocalizedPage = {
  groupId: "carnaval",
  symbol: "sun",
  title: `Carnaval no Egito ${YEAR} — viagem privada no feriado | Kemet`,
  description:
    `Carnaval ${YEAR} no Egito: dez dias usando o feriado, fevereiro no melhor clima do ano, roteiros privados com preço, o voo desde o Brasil e o que saber antes.`,
  keywords:
    `carnaval no egito, carnaval ${YEAR} viagem, viajar no carnaval ${YEAR}, egito em fevereiro, feriado de carnaval viagem internacional, roteiro egito 10 dias, viagem privada egito`,
  crumb: `Carnaval ${YEAR}`,
  h1: `Carnaval no Egito, ${YEAR}`,
  standfirst:
    `Em ${YEAR} o Carnaval cai de ${span(SATURDAY, ASH)} — em fevereiro, o melhor mês do ano para os monumentos.`,
  lede:
    `Para quem quer trocar o bloco pelas Pirâmides, o calendário de ${YEAR} ajuda. O feriado cai em fevereiro: dias de ${feb.temps.luxor} em Luxor, céu seco e menos gente do que em janeiro. Com o feriado, dá para passar dez dias no Egito usando cerca de cinco dias úteis de férias. Esta página é o plano: as datas, o voo, roteiros com preço e o que muda em ${YEAR}.`,
  facts: [
    { label: `Carnaval ${YEAR}`, value: span(SATURDAY, ASH, "–") },
    { label: "Luxor em fevereiro", value: feb.temps.luxor },
    { label: "Voo desde São Paulo", value: "uma conexão" },
    { label: "Fechar a reserva", value: BOOK_BY },
  ],
  sections: [
    {
      title: "Dez dias no Egito com cinco de férias",
      body:
        `Embarque na ${wd(FLY_OUT)}, ${dm(FLY_OUT)}, à noite; chegada ao Cairo no ${wd(SATURDAY)}, ${dm(SATURDAY)}. Dez dias no Egito e volta na ${wd(FLY_HOME)}, ${dm(FLY_HOME)}, chegando ao Brasil no dia seguinte. Com a segunda e a terça de Carnaval (${dm(TUESDAY)}) e a Quarta-feira de Cinzas, são cerca de cinco dias úteis de férias. Quem pode ficar até o fim do mês ainda pega o Festival do Sol em Abu Simbel, em 22 de fevereiro.`,
    },
    {
      title: "O voo",
      body:
        "Não há voo direto do Brasil para o Egito. As rotas com uma conexão passam por Doha, Dubai, Istambul ou Adis Abeba e somam cerca de 17 a 20 horas de São Paulo ao Cairo. Por isso o primeiro dia no Egito é sempre leve: chegada, hotel, jantar. Os voos internacionais ficam por conta de vocês; a partir do desembarque no Cairo, cuidamos de tudo.",
    },
    {
      title: "Fevereiro, o melhor mês do ano",
      body:
        `De dia, ${feb.temps.cairo} no Cairo, ${feb.temps.luxor} em Luxor e ${feb.temps.aswan} em Assuã — quente o bastante para passar o dia ao ar livre, fresco o bastante para uma manhã inteira em Karnak ser um prazer. As noites são frescas, sobretudo no rio: levem um casaco. O ar parado do inverno é o melhor do ano para o balão em Luxor. No Mar Vermelho a água está em ${feb.seaTemp}: ótima para mergulho com roupa de neoprene, fresca para quem só quer nadar.`,
    },
    ...(ramadanSection ? [ramadanSection] : []),
    {
      title: "Reservem cedo",
      body:
        `Fevereiro já é alta temporada no Egito, e os melhores barcos do Nilo e os quartos com vista para as pirâmides são os primeiros a sair. Recomendamos fechar ${BOOK_BY}. Um sinal de 25 % confirma a viagem; o saldo é pago 30 dias antes da chegada, ou seja, até ${dm(BALANCE_DUE)}. Antes de qualquer pagamento, vocês recebem o roteiro por escrito com o preço detalhado.`,
    },
  ],
  highlights: {
    heading: "Roteiros que cabem no feriado",
    items: [
      `${T10.title} — ${days(T10)}: Cairo, Alexandria, Assuã e Luxor, com cruzeiro pelo Nilo. A partir de ${brl(T10.price)} por pessoa${FLY_EXTRA ? `; com voos internos no lugar do trem noturno, ${brl(FLY_EXTRA)} a mais` : ""}.`,
      `${T9.title} — ${days(T9)}: Cairo, Gizé, Assuã e Luxor, pensado para casais. A partir de ${brl(T9.price)} por pessoa.`,
      `${T8.title} — ${days(T8)}: Cairo, Gizé, Luxor e Assuã no ritmo de uma família. A partir de ${brl(T8.price)} por pessoa.`,
      `Kemet Ultra, O faraó privado — 7 dias, com a Grande Pirâmide e Karnak abertos só para vocês. A partir de ${brl(PHARAOH.price2)} por pessoa, para dois.`,
    ],
  },
  faqs: [
    { q: `Quando é o Carnaval de ${YEAR}?`, a: `O Carnaval de ${YEAR} vai do ${wd(SATURDAY)}, ${dm(SATURDAY)}, até a Quarta-feira de Cinzas, ${dm(ASH)}; a terça de Carnaval é ${dm(TUESDAY)}. Para uma viagem ao Egito, o ideal é embarcar na ${wd(FLY_OUT)} à noite, ${dm(FLY_OUT)}.` },
    { q: "Fevereiro é uma boa época para ir ao Egito?", a: `É, provavelmente, a melhor. Em fevereiro Luxor tem ${feb.temps.luxor} de dia, o ar é seco e limpo e o pico de janeiro já passou. As noites são frescas, principalmente no rio, e a água do Mar Vermelho está em ${feb.seaTemp}.` },
    ...(RAMADAN_START ? [{ q: `O Ramadã atrapalha uma viagem no Carnaval de ${YEAR}?`, a: `Não atrapalha — muda o ritmo. O Ramadã deve começar por volta de ${RAMADAN_START}. Os sítios arqueológicos seguem abertos, às vezes com horário mais curto à tarde; hotéis e barcos servem as refeições normalmente. Fazemos as visitas cedo, e as noites de iftar, com a cidade inteira na rua, costumam ser uma das melhores lembranças da viagem.` }] : []),
    { q: "Quantos dias são necessários?", a: "Para o Cairo, Luxor, um cruzeiro pelo Nilo e Assuã sem pressa, oito a dez dias no Egito. Com o feriado de Carnaval, dez dias custam cerca de cinco dias úteis de férias — vindo do Brasil, menos que isso raramente compensa o voo." },
    { q: "Preciso de vacina para ir ao Egito saindo do Brasil?", a: "Sim: o Egito exige o Certificado Internacional de Vacinação ou Profilaxia (CIVP) contra a febre amarela de quem chega de países com risco de transmissão, e o Brasil está entre eles. A vacina precisa ser tomada pelo menos dez dias antes do embarque, e o certificado é emitido pela Anvisa. Confirmem a regra atual com a Anvisa antes de viajar." },
  ],
  cta: {
    heading: `Carnaval ${YEAR} no Egito?`,
    text: "Mandem quantas pessoas vão e o que vocês querem ver. Vocês recebem um roteiro de verdade para as datas do feriado, com o preço detalhado — sem compromisso.",
    whatsapp: `Olá Kemet — queremos viajar ao Egito no Carnaval de ${YEAR}.`,
    emailSubject: `Carnaval ${YEAR} no Egito — consulta`,
  },
  moreLabel: "Mais em português",
  moreText: "Os roteiros, o cruzeiro pelo Nilo, a melhor época e a segurança, cada um na sua página.",
  moreRoute: "pt/viagens-ao-egito.html",
  links: [
    { label: "Quando ir ao Egito", route: "pt/melhor-epoca-para-ir-ao-egito.html" },
    { label: "O cruzeiro pelo Nilo", route: "pt/cruzeiro-pelo-nilo.html" },
    { label: "É seguro viajar para o Egito?", route: "pt/e-seguro-viajar-para-o-egito.html" },
    { label: "Kemet Ultra", route: "pt/viagens-ultra-luxo-egito.html" },
  ],
};
