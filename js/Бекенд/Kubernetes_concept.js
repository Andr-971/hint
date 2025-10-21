//! KUBERNETES: ШПАРГАЛКА ДЛЯ СОБЕСЕДОВАНИЯ
// 🎯 ⁡⁢⁣⁣ОСНОВНОЕ ОПРЕДЕЛЕНИЕ⁡
{
	// ⭐ ⁡⁣⁣⁢Kubernetes (K8s) - это open-source платформа для оркестрации контейнеризированных приложений, обеспечивающая автоматическое развертывание, масштабирование и управление.⁡
}
// 📖 ⁡⁢⁣⁣ИСТОРИЯ⁡
{
	// ⭐ ⁡⁣⁣⁢Создан Google на основе внутренней системы Borg (2014)⁡
	// ⭐ ⁡⁣⁣⁢Передан CNCF (Cloud Native Computing Foundation) в 2015⁡
	// ⭐ ⁡⁣⁣⁢Стал industry standard для container orchestration⁡
}
// 🏗️ ⁡⁢⁣⁣КЛЮЧЕВЫЕ КОНЦЕПЦИИ⁡
{
	// ⭐ ⁡⁢⁣⁣Архитектура⁡
	{
		// Master Node (Control Plane)
		// ⁡⁣⁣⁢├── API Server⁡
		// ⁡⁣⁣⁢├── etcd (хранилище)⁡
		// ⁡⁣⁣⁢├── Scheduler⁡
		// ⁡⁣⁣⁢├── Controller Manager⁡
		// ⁡⁣⁣⁢└── Cloud Controller Manager⁡
		// Worker Nodes
		// ⁡⁣⁣⁢├── Kubelet⁡
		// ⁡⁣⁣⁢├── Kube-proxy⁡
		// ⁡⁣⁣⁢├── Container Runtime⁡
		// ⁡⁣⁣⁢└── Pods⁡
	}
    // ⭐ ⁡⁢⁣⁣Основные компоненты⁡
    {
		// ☑️ ⁡⁣⁢⁢Pod - наименьшая deployable unit⁡
		{
			// yaml
			`apiVersion: v1
            kind: Pod
            metadata:
            name: my-app-pod
            spec:
            containers:
            - name: nginx
                image: nginx:1.19
                ports:
                - containerPort: 80`;
		}
		// ☑️ ⁡⁣⁢⁢Deployment - управление жизненным циклом приложения⁡
		{
			// yaml
			`apiVersion: apps/v1
            kind: Deployment
            metadata:
            name: my-app
            spec:
            replicas: 3
            selector:
                matchLabels:
                app: my-app
            template:
                metadata:
                labels:
                    app: my-app
                spec:
                containers:
                - name: nginx
                    image: nginx:1.19
                    ports:
                    - containerPort: 80`;
		}
        // ☑️ ⁡⁣⁢⁢Service - сетевой доступ к приложению⁡
        {
            `apiVersion: v1
            kind: Service
            metadata:
            name: my-service
            spec:
            selector:
                app: my-app
            ports:
                - protocol: TCP
                port: 80
                targetPort: 80
            type: LoadBalancer`;
        }
	}
}
// 🎯 ⁡⁢⁣⁣ДЛЯ ЧЕГО ИСПОЛЬЗУЕТСЯ KUBERNETES?⁡
{
	// ⭐ ⁡⁢⁣⁣ОСНОВНЫЕ USE CASES⁡:
	// ☑️ ⁡⁣⁣⁢Auto-scaling - автоматическое масштабирование⁡
	// ☑️ ⁡⁣⁣⁢Self-healing - самовосстановление⁡
	// ☑️ ⁡⁣⁣⁢Rolling updates - бесшовные обновления⁡
	// ☑️ ⁡⁣⁣⁢Service discovery - обнаружение сервисов⁡
	// ☑️ ⁡⁣⁣⁢Storage orchestration - управление хранилищем⁡
	// ☑️ ⁡⁣⁣⁢Secret management - управление секретами⁡
}
// 🔧 ⁡⁢⁣⁣ПРАКТИЧЕСКИЕ ПРИМЕРЫ⁡
{
	// ⭐ ⁡⁣⁣⁢Базовые команды⁡
	{
		// bash
		`# Получить информацию о кластере
        kubectl cluster-info

        # Просмотреть nodes
        kubectl get nodes

        # Создать deployment
        kubectl create deployment nginx --image=nginx:1.19

        # Масштабировать deployment
        kubectl scale deployment nginx --replicas=3

        # Применить конфигурацию из файла
        kubectl apply -f deployment.yaml

        # Просмотреть pods
        kubectl get pods

        # Просмотреть логи pod
        kubectl logs <pod-name>

        # Выполнить команду в pod
        kubectl exec -it <pod-name> -- /bin/bash

        # Удалить ресурс
        kubectl delete -f deployment.yaml`;
	}
	// ⭐ ⁡⁣⁣⁢ConfigMap и Secrets⁡
	{
		// yaml
		`# ConfigMap
        apiVersion: v1
        kind: ConfigMap
        metadata:
        name: app-config
        data:
        database.url: "postgresql://localhost:5432"
        log.level: "INFO"

        # Secret
        apiVersion: v1
        kind: Secret
        metadata:
        name: app-secret
        type: Opaque
        data:
        password: <base64-encoded-password>`;
	}
    // ⭐ ⁡⁣⁣⁢Horizontal Pod Autoscaler⁡
    {
		// yaml
		`apiVersion: autoscaling/v2
        kind: HorizontalPodAutoscaler
        metadata:
        name: my-app-hpa
        spec:
        scaleTargetRef:
            apiVersion: apps/v1
            kind: Deployment
            name: my-app
        minReplicas: 2
        maxReplicas: 10
        metrics:
        - type: Resource
            resource:
            name: cpu
            target:
                type: Utilization
                averageUtilization: 50`;
	}
}
// 🛠️ ⁡⁢⁣⁣ПРОДВИНУТЫЕ КОНЦЕПЦИИ⁡
{
	// ⭐ ⁡⁣⁣⁢Ingress⁡
	{
		// yaml
		`apiVersion: networking.k8s.io/v1
        kind: Ingress
        metadata:
        name: my-app-ingress
        annotations:
            nginx.ingress.kubernetes.io/rewrite-target: /
        spec:
        rules:
        - host: myapp.example.com
            http:
            paths:
            - path: /
                pathType: Prefix
                backend:
                service:
                    name: my-service
                    port:
                    number: 80`;
	}
	// ⭐ ⁡⁣⁣⁢Persistent Volumes⁡
	{
		// yaml
		`apiVersion: v1
        kind: PersistentVolumeClaim
        metadata:
        name: my-pvc
        spec:
        accessModes:
            - ReadWriteOnce
        resources:
            requests:
            storage: 10Gi`;
	}
    // ⭐ ⁡⁣⁣⁢Namespaces⁡
    {
        // bash
        `# Создать namespace
        kubectl create namespace production

        # Просмотреть ресурсы в namespace
        kubectl get pods -n production`;
    }
}
// 💡 ⁡⁢⁣⁣ЛУЧШИЕ ПРАКТИКИ⁡
{
	// ⭐ ⁡⁣⁣⁢Security⁡:
	{
		// ☑️ ⁡⁣⁢⁢RBAC - настройка прав доступа⁡
		// ☑️ ⁡⁣⁢⁢Security Contexts - ограничение прав контейнеров⁡
		// ☑️ ⁡⁣⁢⁢Network Policies - изоляция трафика⁡
		// ☑️ ⁡⁣⁢⁢Pod Security Standards - стандарты безопасности⁡
	}
    // ⭐ ⁡⁣⁣⁢Reliability⁡:
    {
		// ☑️ ⁡⁣⁢⁢Readiness/Liveness probes⁡
		{
			// yaml
			`livenessProbe:
            httpGet:
                path: /health
                port: 8080
            initialDelaySeconds: 5
            periodSeconds: 10

            readinessProbe:
            httpGet:
                path: /ready
                port: 8080
            initialDelaySeconds: 5
            periodSeconds: 5`;
		}
        // ☑️ ⁡⁣⁢⁢Resource limits⁡
        {
            // yaml
            `resources:
            requests:
                memory: "64Mi"
                cpu: "250m"
            limits:
                memory: "128Mi"
                cpu: "500m"`;
        }
		// ☑️
	}
	// ⭐
}
// 🚀 ⁡⁢⁣⁣ЧТО ГОВОРИТЬ НА СОБЕСЕДОВАНИИ⁡
{
	// ⭐ ⁡⁣⁣⁢Ключевые тезисы⁡:
	// ☑️ ⁡⁣⁢⁢"Kubernetes обеспечивает declarative configuration"⁡
	// ☑️ ⁡⁣⁢⁢"Позволяет управлять приложениями как cattle, не pets"⁡
	// ☑️ ⁡⁣⁢⁢"Обеспечивает high availability и fault tolerance"⁡
	// ☑️ ⁡⁣⁢⁢"Интегрируется с CI/CD pipelines"⁡
	// ☑️ ⁡⁣⁢⁢"Поддерживает multi-cloud стратегии"⁡
	// ⭐ ⁡⁣⁣⁢Пример ответа на вопрос "Что такое Kubernetes?"⁡:
	// ☑️ ⁡⁣⁢⁢"Kubernetes - это система оркестрации контейнеров, которая автоматизирует развертывание, масштабирование и управление контейнеризированными приложениями. Она обеспечивает отказоустойчивость через self-healing механизмы, позволяет легко масштабировать приложения и управлять ими декларативным способом через YAML-манифесты."⁡
}
// 📚 ⁡⁢⁣⁣ДОПОЛНИТЕЛЬНЫЕ ТЕХНОЛОГИИ В ЭКОСИСТЕМЕ KUBERNETES⁡
{
	// ⭐ ⁡⁣⁣⁢Helm - package manager⁡
	// ⭐ ⁡⁣⁣⁢Prometheus - мониторинг⁡
	// ⭐ ⁡⁣⁣⁢Fluentd - логирование⁡
	// ⭐ ⁡⁣⁣⁢Istio - service mesh⁡
	// ⭐ ⁡⁣⁣⁢ArgoCD - GitOps⁡
}