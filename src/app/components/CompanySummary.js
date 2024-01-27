import CompanyTitleSummaryInfo from './companySummary/CompanyTitleSummaryInfo';
import CompanySimpleSummaryInfo from './companySummary/CompanySimpleSummaryInfo';
import CompanyAddressSumaryInfo from './companySummary/CompanyAddressSumaryInfo';
import CompanyEmployeeSummaryInfo from './companySummary/CompanyEmployeeSummaryInfo';

export default function CompanySummary({ company }) {
    const address = company.siege.geo_adresse ?? company.siege.adresse;

    return (
        <div className="flex justify-center flex-col gap-3 w-4/5 bg-gray-200 rounded p-5">
            <CompanyTitleSummaryInfo name={company.nom_complet} address={address} />
            <CompanySimpleSummaryInfo
                category={company.categorie_entreprise}
                siren={company.siren}
            />
            <CompanyAddressSumaryInfo name={company.nom_complet} address={address} />
            <CompanyEmployeeSummaryInfo
                workforceBracket={company.tranche_effectif_salarie}
                year={company.annee_tranche_effectif_salarie}
            />
        </div>
    );
}