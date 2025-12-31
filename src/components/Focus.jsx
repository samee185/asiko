import {
  AcademicCapIcon,
  BriefcaseIcon,
  BanknotesIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
// import { Btn } from "../../utils/Button";

const Focus = () => {
  return (
    <section
      aria-labelledby="focus-heading"
      className="bg-linear-to-b from-white to-blue-50"
    >
      <main className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="max-w-xl">
            <p className="text-sm font-semibold text-blue-600">Focus</p>
            <h2
              id="focus-heading"
              className="mt-3 text-2xl md:text-4xl font-extrabold text-[#2b2b2b] leading-tight"
            >
              Solving societal problems by equipping young people for the
              future
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-600">
              At WuraisGold, we believe in the transformative power of
              compassion and action. Join us in our mission to create lasting
              impact and build a world where every heart shines with hope and
              opportunity.
            </p>
            {/* optional CTA placeholder
            <div className="mt-6">
              <Btn name="Donate now" id="/donate-now" />
            </div>
            */}
          </div>

          <div>
            <ul
              role="list"
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8"
            >
              <li>
                <Single
                  title="Skills & Knowledge"
                  Icon={AcademicCapIcon}
                  text={`Equip young people with relevant skills for today's market and the future of work`}
                />
              </li>
              <li>
                <Single
                  title="Opportunities"
                  Icon={BriefcaseIcon}
                  text={`Connect youth to jobs, internships, and startup opportunities.`}
                />
              </li>
              <li>
                <Single
                  title="Livelihoods"
                  Icon={BanknotesIcon}
                  text={`Empower youth to achieve financial stability and independence.`}
                />
              </li>
              <li>
                <Single
                  title="Discovery"
                  Icon={MagnifyingGlassIcon}
                  text={`Help young Africans discover purpose, set vision-driven goals, and lead with clarity.`}
                />
              </li>
            </ul>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Focus;

const Single = ({ title, Icon, text }) => {
  return (
    <article
      className="group bg-white border border-transparent rounded-lg p-5 hover:shadow-lg transition-shadow duration-200 focus-within:ring-2 focus-within:ring-blue-200"
      tabIndex={0}
      aria-labelledby={`${title.replace(/\s+/g, '-')}-title`}
    >
      <div className="flex items-start gap-4">
        <div className="shrink-0">
          <div className="h-14 w-14 rounded-full bg-linear-to-br from-blue-50 to-blue-100 flex items-center justify-center">
            {Icon ? (
              <Icon className="h-7 w-7 text-blue-600" aria-hidden="true" />
            ) : (
              <div className="h-6 w-6 bg-gray-200 rounded" aria-hidden="true" />
            )}
          </div>
        </div>

        <div className="min-w-0">
          <h3
            id={`${title.replace(/\s+/g, '-')}-title`}
            className="text-lg md:text-xl font-semibold text-[#222] leading-tight"
          >
            {title}
          </h3>
          <p className="mt-2 text-sm  text-gray-600 max-w-prose">
            {text}
          </p>
        </div>
      </div>
    </article>
  );
};
