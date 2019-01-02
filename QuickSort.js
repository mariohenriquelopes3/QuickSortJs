	// Construtor
	var OrdenacaoRapida = function(arr, fn) {
		this.l = arr;
		this.comparador = fn;
		if (this.comparador == undefined) {
			this.comparador = function(o1, o2){
				return ((o1 < o2) ? -1 : 1);
			};
		}
	};

	// Atributos
	OrdenacaoRapida.prototype.l;
	OrdenacaoRapida.prototype.comparador;

	// Metodo Ordenar
	OrdenacaoRapida.prototype.ordenar = function() {
		this.exec(this.l, 0, this.l.length - 1);
	};

	// Metodo posicaoPivot
	OrdenacaoRapida.prototype.posicaoPivot = function(l, ini, fim) {
		var elemPivot = l[fim];
		var i = ini - 1;
		var temp;
		for (var j = ini; j < fim; j++) {
			if (this.comparador(l[j], elemPivot) <= 0) {
				i++;
                temp = l[i];
                l[i] = l[j];
                l[j] = temp;
			}
		}
		temp = l[i + 1];
        l[i + 1] = l[fim];
        l[fim] = temp;
        return i + 1;
	};

	// Metodo Recursivo
	OrdenacaoRapida.prototype.exec = function(l, ini, fim) {
		if (ini < fim) {
			var pivot = this.posicaoPivot(l, ini, fim);
			this.exec(l, ini, pivot - 1);
        	this.exec(l, pivot + 1, fim);
		}
	};