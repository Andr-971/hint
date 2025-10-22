//! KUBERNETES: ШПАРГАЛКА ДЛЯ СОБЕСЕДОВАНИЯ
// 🎯 ⁡⁢⁣⁣ОСНОВНОЕ ОПРЕДЕЛЕНИЕ⁡
{
	// ⭐ ⁡⁣⁣⁢Kubernetes (K8s) - это open-source платформа для оркестрации контейнеризированных приложений, обеспечивающая автоматическое развертывание, масштабирование и управление.⁡
	// ⭐ ⁡⁣⁣⁢Пример ответа на вопрос "Что такое Kubernetes?"⁡:
	// ☑️ ⁡⁣⁢⁡⁢⁣⁡⁣⁣⁢"Kubernetes - это система оркестрации контейнеров, которая автоматизирует развертывание, масштабирование и управление контейнеризированными приложениями. Она обеспечивает отказоустойчивость через self-healing(самовосстановление⁡) механизмы, позволяет легко масштабировать приложения и управлять ими декларативным способом через YAML-манифесты."⁡
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
		// ⁡⁣⁢⁢Master Node⁡ (Control Plane)
		// ⁡⁣⁣⁢├── API Server⁡                  # связующее звено между всеми остальными компонентами Kubernetes. Обычно устанавливается на мастер-узле (Master node).
		// ⁡⁣⁣⁢├── etcd (хранилище)⁡            # open-source приложение, предназначенное для работы на нескольких узлах в виде кластера.
		// ⁡⁣⁣⁢├── Scheduler⁡                   # компонент отвечающий за распределение подов (Pods) по рабочим узлам (Nodes) в кластере.
		// ⁡⁣⁣⁢├── Controller Manager⁡          # Это демон, который запускает процессы контроллеров, ответственных за поддержание желаемого состояния кластера.
		// ⁡⁣⁣⁢└── Cloud Controller Manager ⁡   # автоматически управляет ресурсами, специфичными для облачной инфраструктуры, в кластере.
		// ⁡⁣⁢⁢Worker Nodes⁡(рабочие узлы — это машины (виртуальные или физические) в кластере Kubernetes, на которых запускаются контейнеры (поды) с приложениями)
		// ⁡⁣⁣⁢├── Kubelet⁡                     # Он отвечает за то, чтобы контейнеры в Pod'ах были запущены и функционировали в соответствии с предоставленными спецификациями PodSpec
		// ⁡⁣⁣⁢├── Kube-proxy⁡                  # Он отвечает за маршрутизацию трафика между контейнерами и узлами кластера.
		// ⁡⁣⁣⁢├── Container Runtime⁡           # Он отвечает за запуск контейнеров в Pod'ах
		// ⁡⁣⁣⁢└── Pods⁡                        # это самые маленькие развёртываемые вычислительные единицы в Kubernetes, которые используются для развёртывания и управления контейнеризированными приложениями.
	}
    // ⭐ ⁡⁢⁣⁣Основные компоненты⁡
    {
		// ☑️ ⁡⁣⁢⁡⁣⁢⁢Pod - наименьшая deployable unit (Pod может содержать один или несколько контейнеров, которые используют одну сеть и хранилище. Контейнеры внутри одного Pod могут общаться друг с другом с помощью localhost.)⁡
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
		// ☑️ ⁡⁣⁢⁡⁣⁢⁢Service - сетевой доступ к приложению(обеспечивает стабильный доступ к приложениям в кластере, даже если поды (Pods) динамически меняются.)⁡
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
	// ⭐ ⁡⁣⁣⁡⁣⁣⁢Ingress (управляет внешним доступом к сервисам в кластере, обычно через HTTP и HTTPS.)⁡
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
	// ⭐ ⁡⁣⁣⁡⁣⁣⁢Persistent Volumes (блоки хранения в экосистеме Kubernetes, которые предоставляют пользовательские данные в подах и сохраняют их независимо от жизненного цикла отдельных подов)⁡
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
	// ⭐ ⁡⁣⁣⁡⁣⁣⁢Namespaces (Пространства имён помогают организовывать, контролировать доступ и управлять ресурсами, особенно в ситуациях, когда многие пользователи или приложения используют одну и ту же инфраструктуру.)⁡
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
	// ☑️ ⁡⁣⁢⁡⁢⁣⁣"Kubernetes - это система оркестрации контейнеров, которая автоматизирует развертывание, масштабирование и управление контейнеризированными приложениями. Она обеспечивает отказоустойчивость через self-healing механизмы, позволяет легко масштабировать приложения и управлять ими декларативным способом через YAML-манифесты."⁡
}
// 📚 ⁡⁢⁣⁣ДОПОЛНИТЕЛЬНЫЕ ТЕХНОЛОГИИ В ЭКОСИСТЕМЕ KUBERNETES⁡
{
	// ⭐ ⁡⁣⁣⁢Helm - package manager⁡
	// ⭐ ⁡⁣⁣⁢Prometheus - мониторинг⁡
	// ⭐ ⁡⁣⁣⁢Fluentd - логирование⁡
	// ⭐ ⁡⁣⁣⁢Istio - service mesh⁡
	// ⭐ ⁡⁣⁣⁢ArgoCD - GitOps⁡
}