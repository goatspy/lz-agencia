/**
 * Política de Privacidade — Lz Agencia Marketing Assessoria e Comunicação LTDA
 * LGPD Compliant (Lei 13.709/2018)
 * Domínio: woowlife.com
 */

import React from "react";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Header */}
      <nav className="bg-white border-b border-slate-100 py-4">
        <div className="max-w-4xl mx-auto px-6 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="font-bold text-lg leading-tight">Lz Agencia</span>
            <span className="text-[10px] text-slate-500 font-mono">15828478000181</span>
          </div>
          <a
            href="/"
            className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao Site
          </a>
        </div>
      </nav>

      {/* Content */}
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-6 py-16"
      >
        {/* Title */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">
                Política de Privacidade
              </h1>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
                Última atualização: Janeiro de 2025
              </p>
            </div>
          </div>
          <div className="h-1 w-20 bg-blue-600"></div>
        </div>

        {/* Sections */}
        <div className="space-y-10 text-slate-700 leading-relaxed">
          {/* 1. Introdução */}
          <Section title="1. Introdução">
            <p>
              A <strong>Lz Agencia Marketing Assessoria e Comunicação LTDA</strong>, inscrita no CNPJ sob o nº{" "}
              <strong>15.828.478/0001-81</strong>, com sede na Rua Vicunha, 3472, Bairro Conceição, Porto Velho-RO,
              CEP 76808-384 ("Empresa", "nós", "nosso"), apresenta esta Política de Privacidade para informar de
              forma clara e transparente como tratamos os dados pessoais dos usuários e visitantes de nosso site e
              serviços.
            </p>
            <p>
              Esta Política está em conformidade com a <strong>Lei Geral de Proteção de Dados Pessoais</strong>{" "}
              (LGPD — Lei nº 13.709/2018) e demais legislações aplicáveis à proteção de dados pessoais no Brasil.
            </p>
          </Section>

          {/* 2. Dados Coletados */}
          <Section title="2. Dados Pessoais Coletados">
            <p>Coletamos os seguintes tipos de dados pessoais durante a utilização de nossos serviços e canais:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong>Dados de identificação:</strong> nome, e-mail, número de telefone/WhatsApp, quando fornecidos
                voluntariamente pelo usuário ao entrar em contato conosco.
              </li>
              <li>
                <strong>Dados de navegação:</strong> endereço IP, tipo de navegador, páginas acessadas, tempo de visita,
                data e horário de acesso, coletados automaticamente por meio de cookies e tecnologias similares.
              </li>
              <li>
                <strong>Dados de comunicação:</strong> mensagens trocadas via WhatsApp, e-mail ou outros canais de
                atendimento.
              </li>
            </ul>
          </Section>

          {/* 3. Finalidade */}
          <Section title="3. Finalidade do Tratamento">
            <p>Os dados pessoais coletados são utilizados para as seguintes finalidades:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Responder a solicitações de contato e prestar atendimento ao usuário;</li>
              <li>Fornecer informações sobre nossos serviços, produtos e projetos;</li>
              <li>Melhorar a experiência de navegação em nosso site;</li>
              <li>Cumprir obrigações legais e regulatórias;</li>
              <li>Realizar análises estatísticas e de desempenho do site;</li>
              <li>Enviar comunicações institucionais, quando autorizado pelo titular.</li>
            </ul>
          </Section>

          {/* 4. Base Legal */}
          <Section title="4. Base Legal para o Tratamento">
            <p>
              O tratamento dos dados pessoais é realizado com base nas seguintes hipóteses legais previstas na LGPD
              (Art. 7º):
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong>Consentimento do titular</strong> (Art. 7º, I) — quando o usuário fornece seus dados
                voluntariamente;
              </li>
              <li>
                <strong>Execução de contrato</strong> (Art. 7º, V) — para prestação de serviços contratados;
              </li>
              <li>
                <strong>Interesse legítimo</strong> (Art. 7º, IX) — para melhorias e análises de desempenho;
              </li>
              <li>
                <strong>Cumprimento de obrigação legal</strong> (Art. 7º, II) — quando exigido por legislação aplicável.
              </li>
            </ul>
          </Section>

          {/* 5. Compartilhamento */}
          <Section title="5. Compartilhamento de Dados">
            <p>
              Seus dados pessoais poderão ser compartilhados com terceiros apenas nas seguintes situações:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                Com prestadores de serviços que auxiliam na operação do site (hospedagem, analytics), sob compromisso de
                confidencialidade;
              </li>
              <li>
                Mediante ordem judicial ou solicitação de autoridades competentes, em cumprimento de obrigação legal;
              </li>
              <li>
                Com plataformas de comunicação (WhatsApp, e-mail) para viabilizar o atendimento ao usuário.
              </li>
            </ul>
            <p className="mt-4">
              <strong>Não vendemos, alugamos ou compartilhamos</strong> seus dados pessoais com terceiros para fins de
              marketing sem o seu consentimento expresso.
            </p>
          </Section>

          {/* 6. Segurança */}
          <Section title="6. Segurança dos Dados">
            <p>
              Adotamos medidas técnicas e organizacionais adequadas para proteger os dados pessoais contra acessos não
              autorizados, destruição, perda, alteração ou qualquer forma de tratamento ilícito. Entre as medidas
              adotadas, incluem-se:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Uso de conexão segura (HTTPS/SSL) em nosso site;</li>
              <li>Restrição de acesso aos dados pessoais a pessoas autorizadas;</li>
              <li>Armazenamento seguro de informações em servidores confiáveis;</li>
              <li>Revisão periódica de práticas de segurança.</li>
            </ul>
          </Section>

          {/* 7. Direitos do Titular */}
          <Section title="7. Direitos do Titular dos Dados">
            <p>
              Em conformidade com a LGPD, o titular dos dados pessoais tem os seguintes direitos, que podem ser
              exercidos mediante solicitação ao nosso canal de contato:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Confirmação da existência de tratamento;</li>
              <li>Acesso aos dados pessoais;</li>
              <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
              <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade;</li>
              <li>Portabilidade dos dados a outro fornecedor de serviço;</li>
              <li>Eliminação dos dados tratados com consentimento;</li>
              <li>Informação sobre entidades públicas e privadas com as quais compartilhamos dados;</li>
              <li>Revogação do consentimento a qualquer momento.</li>
            </ul>
            <p className="mt-4">
              Para exercer qualquer desses direitos, entre em contato pelo e-mail{" "}
              <strong>rondoniaagencia@gmail.com</strong> ou pelo telefone{" "}
              <strong>(69) 99304-3883</strong>.
            </p>
          </Section>

          {/* 8. Cookies */}
          <Section title="8. Cookies e Tecnologias de Rastreamento">
            <p>
              Nosso site pode utilizar cookies e tecnologias similares para melhorar a experiência de navegação e
              coletar dados estatísticos de uso. Os cookies utilizados podem ser:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong>Cookies essenciais:</strong> necessários para o funcionamento básico do site;
              </li>
              <li>
                <strong>Cookies analíticos:</strong> utilizados para compreender como os visitantes interagem com o site,
                por meio de ferramentas como Google Analytics;
              </li>
              <li>
                <strong>Cookies de desempenho:</strong> auxiliam na melhoria da experiência de navegação.
              </li>
            </ul>
            <p className="mt-4">
              Você pode configurar seu navegador para recusar cookies ou alertá-lo quando um cookie estiver sendo
              enviado. No entanto, a desativação de cookies pode afetar a funcionalidade do site.
            </p>
          </Section>

          {/* 9. Retenção */}
          <Section title="9. Retenção de Dados">
            <p>
              Os dados pessoais serão mantidos apenas pelo tempo necessário para cumprir as finalidades para as quais
              foram coletados, incluindo o cumprimento de obrigações legais, contratuais, de prestação de contas ou
              requisição de autoridades competentes.
            </p>
            <p>
              Após o término do período de retenção, os dados serão eliminados de forma segura ou anonimizados.
            </p>
          </Section>

          {/* 10. Alterações */}
          <Section title="10. Alterações nesta Política">
            <p>
              Reservamo-nos o direito de alterar esta Política de Privacidade a qualquer momento, sendo a versão mais
              recente publicada nesta página. Recomendamos que o usuário consulte periodicamente este documento para
              manter-se informado sobre nossas práticas de privacidade.
            </p>
            <p>
              Quaisquer alterações significativas serão comunicadas por meio de aviso em nosso site ou pelos canais de
              comunicação disponíveis.
            </p>
          </Section>

          {/* 11. Contato */}
          <Section title="11. Contato e Encarregado de Dados">
            <p>
              Para dúvidas, solicitações ou esclarecimentos sobre esta Política de Privacidade ou sobre o tratamento de
              seus dados pessoais, entre em contato:
            </p>
            <div className="mt-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-3">
              <InfoRow label="Empresa" value="Lz Agencia Marketing Assessoria e Comunicação LTDA" />
              <InfoRow label="CNPJ" value="15.828.478/0001-81" />
              <InfoRow label="Endereço" value="Rua Vicunha, 3472, Conceição, Porto Velho-RO, CEP 76808-384" />
              <InfoRow label="E-mail" value="rondoniaagencia@gmail.com" />
              <InfoRow label="Telefone/WhatsApp" value="(69) 99304-3883" />
            </div>
          </Section>
        </div>

        {/* Back Button */}
        <div className="mt-16 pt-8 border-t border-slate-100">
          <a
            href="/"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar ao Site
          </a>
        </div>
      </motion.main>

      {/* Footer */}
      <footer className="py-12 bg-slate-950 text-slate-400 text-[10px] leading-relaxed">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex justify-between items-center">
            <span className="uppercase tracking-widest font-bold text-slate-200 text-xs">
              Lz Agencia Marketing Assessoria e Comunicação LTDA
            </span>
            <span className="font-mono">© {new Date().getFullYear()} LZ AGENCIA</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-black uppercase tracking-tighter mb-4 text-slate-900">{title}</h2>
      <div className="space-y-4 text-base">{children}</div>
    </section>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:gap-4">
      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 sm:min-w-[140px]">
        {label}:
      </span>
      <span className="text-sm font-bold text-slate-800">{value}</span>
    </div>
  );
}
