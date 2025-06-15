
import AccountingHero from "./accounting/AccountingHero";
import AccountingBenefits from "./accounting/AccountingBenefits";
import AccountingServices from "./accounting/AccountingServices";
import AccountingCTA from "./accounting/AccountingCTA";

const Accounting = () => {
  return (
    <div className="min-h-screen">
      <AccountingHero />
      <AccountingBenefits />
      <AccountingServices />
      <AccountingCTA />
    </div>
  );
};

export default Accounting;
