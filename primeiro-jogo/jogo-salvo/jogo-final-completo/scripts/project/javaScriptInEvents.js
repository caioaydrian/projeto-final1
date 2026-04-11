

const scriptsInEvents = {

	async Folhajogo1_Event11_Act1(runtime, localVars)
	{
		const nave = runtime.objects.nave1.getFirstInstance();
		const tiro = runtime.objects.tiroig1.getFirstPickedInstance();
		
		if (nave && tiro) {
		    nave.instVars.vida -= 10;
		    tiro.destroy();
		}
	},

	async Folhajogo1_Event12_Act4(runtime, localVars)
	{
		runtime.goToLayout("fase-2")
	},

	async Folhajogo2_Event10_Act5(runtime, localVars)
	{
		runtime.goToLayout("vitoria")
	},

	async ["Folha-Vitoria_Event2_Act1"](runtime, localVars)
	{
		runtime.goToLayout("tela-inicial")
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
