document.addEventListener('DOMContentLoaded', () => {
    const tooltipTriggers = document.querySelectorAll('.has-tooltip');
    const tooltipElement = document.createElement('div');
    tooltipElement.classList.add('tooltip');
    document.body.appendChild(tooltipElement);

    tooltipTriggers.forEach((trigger) => {
        trigger.addEventListener('click', (event) => {
            event.preventDefault();

            const tooltipText = trigger.getAttribute('title');
            tooltipElement.innerText = tooltipText;

            const triggerRect = trigger.getBoundingClientRect();
            tooltipElement.style.top = `${triggerRect.bottom}px`;
            tooltipElement.style.left = `${triggerRect.left}px`;

            document.querySelectorAll('.tooltip_active').forEach((tooltip) => {
                tooltip.classList.remove('tooltip_active');
            });

            tooltipElement.classList.add('tooltip_active');
        });
    });

    document.addEventListener('click', (event) => {
        const clickedElement = event.target;
        if (
            !clickedElement.classList.contains('has-tooltip') &&
            !clickedElement.classList.contains('tooltip')
        ) {
            document.querySelectorAll('.tooltip_active').forEach((tooltip) => {
                tooltip.classList.remove('tooltip_active');
            });
        }
    });
});
