export default function FeatureCard({
    title,
    description,
    icon,
    borderColor,
    bgColor,
}) {
    return (
        <div
            className={`group p-8 bg-white rounded-2xl border-2 ${borderColor} hover:border-orange-400 
        transition-all duration-300 hover:shadow-xl hover:-translate-y-2`}
        >
            <div
                className={`inline-flex items-center justify-center w-16 h-16 ${bgColor} rounded-2xl mb-6 
          group-hover:scale-110 transition-transform duration-300`}
            >
                {icon}
            </div>

            <h3 className="text-2xl text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
    );
}